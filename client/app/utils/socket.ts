import { io, Socket } from "socket.io-client";

export let socket: Socket;

export const setupSocket = () => {
    if (process.server) return;

    const config = useRuntimeConfig();
    socket = io(config.public.apiUrl);
}