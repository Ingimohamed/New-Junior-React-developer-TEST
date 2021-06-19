const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());


const items = [
  { id: 1, description: "item 1", userId: 1, resolved: true, image: "./images/ProductA.png"},
  { id: 2, description: "item 2", userId: 1 },
  { id: 3, description: "item 3", userId: 2 },
  { id: 4, description: "item 4" },
];

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.post("/api/items", (req, res) => {
  const item = { id: Date.now(), resolved: false, ...req.body };
  items.push(item);

  res.json(item);
});

app.patch("/api/items/:id", (req, res) => {
  const index = items.findIndex(item => item.id === parseInt(req.params.id));
  const item = items[index];
  if ("resolved" in req.body) item.resolved = req.body.resolved;
  if ("userId" in req.body) item.userId = req.body.userId;

  res.json(item);
});

app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});
