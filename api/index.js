export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      message: "HumanizeX backend is working!",
      dataFromClient: req.body
    });
  } else {
    res.status(200).json({ message: "HumanizeX backend is online!" });
  }
}
