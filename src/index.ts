import app from "./app";
import http from "http";
import config from "./config";

const PORT = config.app.port;

function root(){
    http.createServer(app).listen(PORT, () => {
        console.log(`Server running http://localhost:${PORT}`);
    });
}

root();