export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ error: "Send a POST request" });
    return;
  }
  
  const { storyline } = req.body;
  if (!storyline) {
    res.status(400).json({ error: "No storyline provided" });
    return;
  }

  const book = "Generated story: " + storyline;
  res.status(200).json({ result: book });
}
