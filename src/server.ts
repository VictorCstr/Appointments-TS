import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Funcionando!");
});

app.listen(8080, () => {
  console.log("App running on port 8080!");
});
