import * as socketio from "socket.io";

export abstract class BroadCast{

    public abstract conection:(socket: socketio.Socket)=>void
}