const express = require("express");
const cors = require("cors");
require("dotenv").config();

const recommendRoute = require("./routes/recommend");
const healthRoute = require("./routes/health");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoute);
app.use("/api/recommend", recommendRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 ScentMode backend running on port ${PORT}`);
});
