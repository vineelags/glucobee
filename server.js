const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;

// Replace this with your actual API endpoint
const TARGET_URL = "https://api.glucobee.net/Glucobee";

app.get("/sgv", async (req, res) => {
  try {
    const response = await fetch(TARGET_URL);
    const data = await response.json();
    res.json({ sgv: data.sgv });
  } catch (err) {
    console.error("Error fetching SGV:", err);
    res.status(500).json({ error: "Failed to fetch SGV" });
  }
});

app.get("/", (req, res) => {
  res.send("Glucobee Proxy is running.");
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
