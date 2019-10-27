var express = require("express");
var router = express.Router();
var admin = require("firebase-admin");
var serviceAccount = require("../../secrets/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dicetracker-d863a.firebaseio.com"
});
const database = admin.database();

let validatePayload = payload => {
  if (!typeof payload === "object") return false;
  if (!"Rolls" in payload) return false;
  if (payload.keys.length > 1) return false;
  if (!Array.isArray(payload.Rolls)) return false;
  if (payload.Rolls.length === 0) return true;
  let valid = true;
  payload.Rolls.forEach(roll => {
    if (typeof roll !== "object") valid = false;
    if (!"Values" in roll) valid = false;
    if (!Array.isArray(roll.Values)) valid = false;
    if (roll.Values.length === 0) return;
    roll.Values.forEach(value => {
      if (typeof value !== "number") valid = false;
    });
  });
  return valid;
};

router.post("/", function(request, response) {
  const payload = request.body;
  if (!validatePayload(payload)) {
    response.json({ error: "failed validation" });
    return;
  }
  database
    .ref("sessions")
    .child(`${new Date.getTime()}`)
    .set(payload)
    .then(sessionReference => {
      response.json({ ok: sessionReference });
    })
    .catch(error => {
      response.json({ error });
    });
});

router.get("/", function(request, response) {
  database.ref("sessions").once("value", result => {
    response.json(result);
  });
});

module.exports = router;
