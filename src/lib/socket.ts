import { io, Socket } from "socket.io-client";

const socket: Socket = io(process.env.NEXT_PUBLIC_API_URL || "api:3333", {
    transports: ["websocket"],
});

export default socket;
