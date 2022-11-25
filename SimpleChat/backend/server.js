import http from 'http';
import express from 'express'
import mongoose from 'mongoose';
import WebSocket from "ws";
import mongo from './mongo';
import wsConnect from './wsConnect';

mongo.connect();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server}); // WebSocket Server
const db = mongoose.connection; // database 的變數名稱

db.once('open', () => {
    console.log("MongoDB connected!");
    wss.on('connection', (ws) => {
        //
        // console.log("Server connected");

        // Read history data
        ws.addEventListener('open', wsConnect.initData(ws));
        
        // Define ws.onmessage
        ws.onmessage = wsConnect.onMessage(ws);

    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

