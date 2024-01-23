import express from "express";
import {BaseController} from "./base/abstractions/BaseController";
import {Router} from "express";
import * as os from "os";
import * as formData from 'express-form-data';
import * as socketio from "socket.io";
import * as http from "http";
import {BroadCast} from "./base/abstractions/BroadCast";

const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
};
class App {
    public app: express.Application;
    public port: number | string;
    public server: http.Server;
    public io: socketio.Server;
    constructor(controllers: BaseController[],broadcasts: BroadCast[] = [], port: number | string) {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeBroadCasts(broadcasts);
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        // parse data with connect-multiparty.
        this.app.use(formData.parse(options));
// delete from the request all empty files (size == 0)
        this.app.use(formData.format());
// change the file objects to fs.ReadStream
        this.app.use(formData.stream());
// union the body and the files
        this.app.use(formData.union());
    }

    private initializeControllers(controllers: BaseController[]) {
        this.app.get("/", (request, response) => {
            response.send("Application is running");
        });
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        });


    }
    private initializeBroadCasts(broadcasts: BroadCast[]){
         this.server = http.createServer(this.app);
         this.io = new socketio.Server(this.server);
        broadcasts.forEach((b)=>{
            this.io.on("connection", b.conection);
        })
    }

    public listen() {
        this.server.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
        this.io.on("connection", (...params) => {
            console.log("Websocket connection");
        });
    }
}

export default App;
