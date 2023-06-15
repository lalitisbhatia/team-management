import express , { Application,Request,Response,Router } from "express";
import bodyParser  from "body-parser";
import mongoose from "mongoose";
import BaseController from './controllers/baseController';
import { getDBCONN } from "./utils/envHelper";

require("dotenv").config(); 

class App {
    public app: Application;
    public port: number;
    
    constructor(controllers:BaseController[],port:number){
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeDBConnection();
        this.initializeControllers(controllers)
    }

    private initializeMiddlewares= ()=>{
        this.app.use(bodyParser.json())
    }

    private initializeControllers = ((controllers: BaseController[]) => {
        controllers.forEach((controller: BaseController) =>{
            this.app.use('/',controller.router)
        })
    })


    public listen = () =>{
        this.app.listen(this.port,()=> {
            console.log(`App listening on port ${this.port}`)
        })
    }

    private initializeDBConnection = () => {        
        mongoose.connect(`${getDBCONN()}`);
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
          console.log("Connected successfully");
        });
    }
   }

   export default App

   
// import {router } from './routes'

// const app: Application = express();
// const PORT: number = 5500;
// app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


// app.use('/',router)
// app.use('/other',router)
// app.use('/calc',router)

// app.listen(PORT,() =>{
//     console.log(`app server is running on port ${PORT}`)
// })