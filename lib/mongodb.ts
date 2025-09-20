import mongoose  from "mongoose";

let isConnected :boolean=false;

export const connectToDB =async():Promise<void>=>{
    
    if(isConnected){
        console.log("Connection Successful")
        return;
    }
    try{
        await mongoose.connect(process.env.MONGO_URL||'',{
            dbName:'homepage_airbnb'
        })
        isConnected=true;
    }catch(error){
        console.log(error);
    }
}
