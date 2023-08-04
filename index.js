const fs = require("fs");
const fetch = require("node-fetch");

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

class Authorization {
  constructor(token, filename, channelId, timeSleepMin, timeSleepMax) {
    this.token = token;
    this.filename = filename;
    this.channelId = channelId;
    this.timeSleepMin = timeSleepMin;
    this.timeSleepMax = timeSleepMax;
  }
}

function readConfigFile(filename) {
  try {
    const data = fs.readFileSync(filename, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("error reading or parsing config file:", err);
    return [];
  }
}

function getRandomLine(filename) {
  try {
    const data = fs.readFileSync(filename, "utf8");
    const lines = data.split("\n");
    return lines[Math.floor(Math.random() * lines.length)];
  } catch (err) {
    console.error("error reading file:", err);
    return "";
  }
}

function sendMessage(auth) {
  const postURL = `https://discord.com/api/v9/channels/${auth.channelId}/messages`;
  const msg = getRandomLine(auth.filename);

  console.log(msg);

  fetch(postURL, {
    method: "POST",
    headers: {
      Authorization: auth.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: msg }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("msg sent", data);
    })
    .catch((error) => {
      console.error("error sending message", error);
    });
}

function main() {
  const configData = readConfigFile("config.json");
  const auths = configData.map(
    (data) =>
      new Authorization(
        data.token,
        data.filename,
        data.channelId,
        data.timeSleepMin,
        data.timeSleepMax
      )
  );

  auths.forEach((auth) => {
    setInterval(() => {
      sendMessage(auth);
    }, randomBetween(auth.timeSleepMin * 1000, auth.timeSleepMax * 1000));
  });
}

main();
