export default async function handler(req, res) {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: "Session code required" });

  try {
    const response = await fetch(
      "https://outsend-backend.onrender.com/session/lookup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      }
    );
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server unreachable" });
  }
}
