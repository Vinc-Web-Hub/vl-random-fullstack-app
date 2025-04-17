const express = require("express");
const cors = require("cors");
const randomRoute = require("./routes/random");

const app = express();
const PORT = 3001;

app.use(cors());
app.use("/api/random", randomRoute);

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
