import mongoose from 'mongoose';

const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  console.log('in the connection');
  const db = await mongoose.connect(process.env.MONGODB_URI!, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: 'carmart',
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
