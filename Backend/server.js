import "dotenv/config"
import app from "./src/app.js"
import http from "http";
import { connectDB } from "./src/config/database/db.js"
import { initSocket } from "./src/sockets/server.socket.js";


const port = process.env.PORT;

connectDB();

const httpServer = http.createServer(app);

initSocket(httpServer);

app.listen(port,()=>{
    console.log("Server is running")
})


