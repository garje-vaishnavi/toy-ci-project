const express = require("express");
const { add } = require("./math");

const app = express();

app.get("/add", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ result: add(a, b) });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
