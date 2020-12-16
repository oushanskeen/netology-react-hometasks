const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
/*
const sampleData = [
  { id: 0, content: "task one" },
  { id: 1, content: "task two" },
  { id: 2, content: "task three" },
  { id: 3, content: "task four" },
];

fs.writeFile("tasksDb.json", JSON.stringify(sampleData), err => {
  err ? console.log("Err is: ", err) : console.log("File is written ok!");
});
*/
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.get("/notes", (req, res) => {
  fs.readFile("./tasksDb.json", "utf-8", (err, data) => {
    err ? console.log("Error is: ", err) : res.send(data);
  });
});
app.post("/notes", (req, res) => {
  console.log("POST req", req.query.task);
  console.log("URL PATH: ", req);
  console.log(JSON.stringify(req.query.task.id));
  fs.readFile("./tasksDb.json", "utf-8", (err, data) => {
    err
      ? console.log("Error is: ", err)
      : (() => {
          const oldData = JSON.parse(data);
          console.log("OLD DATA: ", oldData);
          const newData = JSON.stringify([...oldData, JSON.parse(req.query.task)]);
          console.log("NEW DATA: ", newData);
          fs.writeFile("./tasksDb.json", newData, err => {
            err ? console.log("Err is err: ", err) : res.send(JSON.stringify(newData));
          });
        })();
  });
});
app.delete("/notes", (req, res) => {
  console.log("DELETE req", req.query.id);
  fs.readFile("./tasksDb.json", "utf-8", (err, data) => {
    err
      ? console.log("Error is: ", err)
      : (() => {
          const newData = JSON.stringify(
            JSON.parse(data).filter(e => e.id !== +req.query.id)
          );
          console.log("NEW DATA: ", newData);
          fs.writeFile("./tasksDb.json", newData, err => {
            err ? console.log("Err is err: ", err) : res.send(newData);
          });
        })();
  });

  //res.send(JSON.stringify(sampleData));
});

const httpServer = http.createServer(app);

httpServer.listen(7777);
console.log("me simple crud started");
