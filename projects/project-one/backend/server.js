const http = require("http");
const { MongoClient } = require("mongodb");

const PORT = 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017";

let dbClient;

async function connectToMongo() {
  try {
    dbClient = new MongoClient(MONGO_URL);
    await dbClient.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", db: "connected" }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

connectToMongo().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

