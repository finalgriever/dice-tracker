const URL = "https://localhost:5001/api/sessions";

function convertPayload(data) {
  let payload = { Rolls: [] };
  data.forEach(roll => {
    payload.Rolls.push({ Values: roll });
  });
  return payload;
}

export async function postSession(data) {
  try {
    const payload = JSON.stringify(convertPayload(data));
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: payload
    });
    let result = await response.json();
    return result;
  } catch (exception) {
    console.log(exception);
  }
}

export async function getSessions(data) {
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await response.json();
}
