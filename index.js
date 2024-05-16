const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 5000;
// API endpoint for random images
app.get("/api/images/random", async (req, res) => {
  try {
    const response = await axios.get("https://picsum.photos/200", {
      responseType: "arraybuffer",
    });
    res.set("Content-Type", "image/jpeg");
    res.send(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch random image" });
  }
});

// API endpoint for random joke
app.get("/api/jokes/random", async (req, res) => {
  try {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    res.json({
      success: true,
      message: "Random joke fetched successfully",
      data: { joke: response.data.value },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch random joke" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// routes
app.get("/", (req, res) => {
  res.send("Welcome to the Random Images-Joke API (Amanulla)");
});
