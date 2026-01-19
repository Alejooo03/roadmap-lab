const http = require("http");
const { MongoClient } = require("mongodb");

const PORT = 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017";

let db;

async function connectToMongo() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  db = client.db("app_db");
  console.log("MongoDB connected");
}

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/items") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      const data = JSON.parse(body);
      const item = {
        name: data.name,
        createdAt: new Date()
      };

      await db.collection("items").insertOne(item);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(item));
    });

  } else if (req.method === "GET" && req.url === "/items") {
    const items = await db.collection("items").find().toArray();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(items));

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

