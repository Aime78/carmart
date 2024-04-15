
import dbConnect from '@/shared/db/connectionDB';
import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  userName: string;
  firstName: string;
}
const userSchema: Schema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  // database: 'carmart',
  // collection: 'user',
});

const User = mongoose.model<IUser>('user', userSchema, 'user');
export async function GET() {
  // Connect to your Atlas cluster
  // const client = new MongoClient(
  //   'mongodb+srv://aime78:yKgkLbmmnrPrf3lR@cluster0.43ladse.mongodb.net/'
  // );
  // const user = new User({ userName: 'calvin78', firstName: 'Calvin' });
  await dbConnect();
  const user = await User.find();
  return Response.json(user)
  // console.log(user)
  // const products = await User.find({});

  // try {
  //   // await client.connect();
  //   console.log('It works');
  //   // const db = await client.db('carmart');
  //   // const sales = await db.collection('cars').find({}).toArray();
  //   // console.log(process.env.DB_USER);
  //   // console.log(sales);
  //   // await sales.forEach(console.log);
  //   // return Response.json(sales);
  // } catch (error) {
  //   console.log(error);
  // }
}

// console.log('Hey')
