import {BroadCast} from "../base/abstractions/BroadCast";
import * as socketio from "socket.io";
import {Socket} from "socket.io";

export default class ChatController extends BroadCast{

    conection = (socket:Socket) =>{
        socket.on('chat message', (msg) => {
            socket.broadcast.emit('chat message', msg);
        });
    }


}