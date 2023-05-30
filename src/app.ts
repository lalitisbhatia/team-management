import express , { Application,Request,Response,Router } from "express";
import bodyParser  from "body-parser";
import mongoose from "mongoose";
require("dotenv").config(); 

class App {
    public app: express.Application;
    public port: number;
    // public router;
    constructor(controllers:any,port:number){
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers)
    }

    private initializeMiddlewares= ()=>{
        this.app.use(bodyParser.json())
    }

    private initializeControllers = ((controllers: any) => {
        controllers.forEach((controller: any) =>{
            this.app.use('/',controller.router)
        })
    })


    public listen = () =>{
        this.app.listen(this.port,()=> {
            console.log(`App listening on port ${this.port}`)
        })
    }

    // public connectDB = () => {
    //     mongoose.connect(
    //         process.env.MONGODB_URI, 
    //         {
    //             useNewUrlParser: true,
    //             useUnifiedTopology: true
    //         }
    //     );
    // }
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