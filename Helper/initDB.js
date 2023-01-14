import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  const uri = process.env.MONGO_URI;
  const db = mongoose.connect(uri, options);
  console.log('new connection');
  connection.isConnected = db

  if (!uri) {
    throw new Error('Add your Mongo URI to .env');
  }
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.MONGO_URI === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}



function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
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