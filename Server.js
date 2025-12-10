import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "HumanizeX backend is running!" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
