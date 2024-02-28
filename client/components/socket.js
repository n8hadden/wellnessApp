import { io } from 'socket.io-client';
const socket = io.connect('https://wellness-server.onrender.com');
export default socket;