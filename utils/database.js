import mongoose, { set } from 'mongoose'

let isConnected = false;

export const connectToDB = async () => {
    mongoose,set('strictQuery', true);
    if(isConnected){
        console.log('MongoDB is connected');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'share-prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;
        console.log("Mongo DB Connected");

    }catch(error){
        console.log(error)
    }
};