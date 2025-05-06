import { client } from "@repo/db/client";

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3003 });

wss.on("connection", (socket) => {
  socket.send("server is live you are connected");
});
