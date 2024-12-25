import mongoose from "mongoose"

const connection = async() => {
    try{
        const URL = `mongodb://localhost:27017/CrudApp`;
        await mongoose.connect(URL)
        console.log(`Mongo Db id connected`);
    }catch(error){
            console.log(`Error while connecting to database`,error);
    }
}

export default connection;