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
  if (!Array.isArray(payload)) return false;
  if (payload.length === 0) return true;
  let valid = true;
  payload.forEach(roll => {
    if (!Array.isArray(roll)) valid = false;
    if (roll.length === 0) return;
    roll.forEach(value => {
      if (typeof value !== "number") valid = false;
    });
  });
  return valid;
};

router.post("/", function(request, response) {
  if (!validatePayload(request.body)) {
    response.json({ error: "failed validation" });
    return;
  }
  const payload = JSON.stringify(request.body);
  database
    .ref(`sessions/${new Date().getTime()}`)
    .set(payload)
    .then(sessionReference => {
      response.json({ result: "Ok" });
    })
    .catch(error => {
      response.json({ result: "Error" });
    });
});

router.get("/", function(request, response) {
  database.ref("sessions").once("value", result => {
    response.json(result);
  });
});

module.exports = router;
