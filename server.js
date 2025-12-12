import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Test endpoint
app.get("/", (req, res) => {
  res.send("HumanizeX backend is working");
});

// Humanize text endpoint
app.post("/humanize", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "No text provided" });
  }

  const humanized = "Humanized version: " + text; 
  res.json({ result: humanized });
});

// Create book endpoint
app.post("/book", (req, res) => {
  const { storyline } = req.body;

  if (!storyline) {
    return res.status(400).json({ error: "No storyline provided" });
  }

  const book = "Generated Book Based on Storyline: " + storyline;
  res.json({ result: book });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
