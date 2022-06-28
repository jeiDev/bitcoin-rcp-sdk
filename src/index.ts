import core from "./core";
import app from "./app";
import http from "http";
import config from "./config";

const PORT = config.app.port;

const root = async () => {
    await core();

    http.createServer(app).listen(PORT, () => {
        console.log(`Server running http://localhost:${PORT}/`)
    })
}

root();