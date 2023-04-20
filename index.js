const express = require("express");
const axios = require("axios");
const cache = require("memory-cache");

const app = express();
const PORT = process.env.PORT || 3000;
const GNEWS_API_KEY = "3dc669a4f095f269743e6c00403e80d4"; // Replace with your GNews API key

app.get("/articles", async (req, res) => {
  const { count = 10, category = "title", keywords = "news" } = req.query;
  const cacheKey = JSON.stringify(req.query);
  const cachedResult = cache.get(cacheKey);

  if (cachedResult) {
    return res.json(cachedResult);
  }

  try {
    const response = await axios.get("https://gnews.io/api/v4/search", {
      params: {
        q: keywords,
        in: category,
        max: count,
        lang: "en",
        apikey: GNEWS_API_KEY,
      },
    });

    cache.put(cacheKey, response.data, 30 * 60 * 1000); // Cache for 30 minutes
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});