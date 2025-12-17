import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import { createServer } from "http";
import helmet from 'helmet';
import morgan from 'morgan';
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: { origin: '*' },
});

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
});

httpServer.listen(PORT, () => {
    console.log(`Server + Socket.IO running on http://localhost:${PORT}`);
});