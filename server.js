const express = require("express");
const pino = require("pino");
const expressPino = require("express-pino-logger");
const path = require("path");

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const expressLogger = expressPino({ logger });

const app = express();

const dist = path.join(__dirname, "dist");

app.use(expressLogger);

app.use(express.static(dist));

app.get("*", (req, res) => {
    res.sendFile(path.join(dist, "index.html"));
});

app.listen(5000, () => {
    logger.info("Server running on port 5000");
});
