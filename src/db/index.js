import mongoose from "mongoose";
import {connectDatabase} from "../constants.js";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${connectDatabase}`)
        console.log(`\n MongoDb Connected !! DB HOST: 
            ${connectionInstance.connection.host}`);

    }
    catch(error){
        console.log("MongoDB connection error",error);
        process.exit();
    }
}
export default connectDB;