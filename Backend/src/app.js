import express from "express";
import cookieParser from "cookie-parser";
// import authRouter from "./routes/auth.routes.js";
// import chatRouter from "./routes/chat.routes.js";
import {appRouter} from './routes/index.js'
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
    express.static(
        path.join(__dirname, "../../Frontend/dist")
    )
);
app.use(cors({
    origin: process.env.CLIENT_URL,
credentials: true,
}))

// Health check
app.get("/health",(req,res)=>{
    res.json({
        status:"ok"
    });
});

// app.use("/api/auth", authRouter);
// app.use("/api/chats", chatRouter);

app.use("/api", appRouter)
app.get("*splat", (req,res)=>{
    res.sendFile(
        path.join(__dirname,"../../Frontend/dist/index.html")
    );
});

export default app;