# nodejs-simple-logger
Simple code to log messages! </br>
Messages are written/appended to a file called "logs.json".
> It's my first little project in javascript, don't be too harsh :)

## How does it work?
### index.js
```javascript
fs.readFile(path.join(__dirname, "/logs.json"), "utf8", (err, data) => {
  if (err) throw `${err} MUST HAVE 'logs.json' file in the directory!`;

  messages.push("Hi");
  ...
  ...
```
The messages which get logged are the ones that are pushed in the "messages" Array, such as:

```javascript
  messages.push("Hi");
  messages.push("How are you?");
  messages.push("Where are you?");
  messages.push("I'm sorry!");
  messages.push("Welcome!!");
```

The messages are logged in **"/logs.json"**
Also, you may notice 2 different arrays:
```javascript
const messages = [];
let messagesJSON = [];
```
I wanted to have one array **"messages[]"** that kept the messages as simple strings. The second one stores messages with their uuid after parsing them from JSON, this array is the one that gets written in the logs.json.

```javascript
if (data !== "") messagesJSON = JSON.parse(data);
```
### The logging happens here:
```javascript
  messages.forEach((mex) => {
    logger.log(mex);
  });
```
Each "mex" is pushed in the messagesJSON[] after getting assigned a uuid:
```javascript
logger.on("message", (data) => messagesJSON.push(data)); //data = uuid + message
```

### logger.js
The logger is an EventEmitter that creates a log every time the .log() function is called.
```javascript
class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg: msg });
    console.log(`[+]created a log for the message "${msg}"`);
  }
}
```
## How to run?
Be sure to have installed the npm package: **uuid**, you can just run the ```npm install``` command to get all the packages from **package.json**.
### Once all packages are installed, just run the ```node index.js``` command to run the file.
