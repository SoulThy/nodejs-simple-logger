const fs = require("fs");
const path = require("path");

const Logger = require("./logger.js");
const logger = new Logger();
logger.on("message", (data) => messagesJSON.push(data));

const messages = [];
let messagesJSON = [];

fs.readFile(path.join(__dirname, "/logs.json"), "utf8", (err, data) => {
  if (err) throw `${err} MUST HAVE 'logs.json' file in the directory!`;

  messages.push("Hi");
  messages.push("How are you?");
  messages.push("Where are you?");
  messages.push("I'm sorry!");
  messages.push("Welcome!!");
  messages.push("See you!");
  messages.push("Hope you are doing great");

  if (data !== "") messagesJSON = JSON.parse(data);

  messages.forEach((mex) => {
    logger.log(mex);
  });

  fs.writeFile(
    path.join(__dirname, "/logs.json"),
    JSON.stringify(messagesJSON, null, 2),
    (err) => {
      if (err) throw err;
    }
  );
});
