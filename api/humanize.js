export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ error: "Send a POST request" });
    return;
  }

  const { text } = req.body;
  if (!text) {
    res.status(400).json({ error: "No text provided" });
    return;
  }

  const humanized = "Humanized: " + text;
  res.status(200).json({ result: humanized });
}
