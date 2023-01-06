import mongoose from "mongoose";

const connection = {};

const connect = async () => {
    if (connection.isConnected) {
        console.log('already connected');
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        console.log(connection);
        if (connection.isConnected === 1) {
            console.log('use previous connection');
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })    
    .then(()=>{ console.log('server is connected') })
    .catch((error)=>{console.log(error.message)})

    connection.isConnected = db.connections[0].readyState;
}

const disconnect = async () => {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log('not disconnected');
        }
    }
}

const db = { connect, disconnect };
export default db;

//mongodb+srv://admin:<password>@cluster0.hwfrzyq.mongodb.net/?retryWrites=true&w=majority

//  const initDB = async ()=>{
//     mongoose.connect(
//     process.env.MONGO_URI,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
    // .then(
    //     ()=>{
    //         console.log('server is connected')
    //     }
    // )
    // .catch(
    //     (error)=>{
    //         console.log(error.message);
    //     }
    // )
// }

// export default initDB