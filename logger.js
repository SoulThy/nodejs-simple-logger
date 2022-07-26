const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg: msg });
    console.log(`[+]created a log for the message "${msg}"`);
  }
}

module.exports = Logger;
