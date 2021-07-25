import mongoose from 'mongoose';
import { enviroment } from '../app/config/enviroment';

export const connectMongoDB = () => {
  mongoose.connect(
    `mongodb://localhost:27017/newspaper`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      authSource: 'admin',
      auth: {
        user: 'admin',
        password: 'admin',
      },
    },
    (err) => {
      console.log(err);
    }
  );

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.log(error);
  });

  db.once('open', () => {
    console.log('Connect to DB');
  });
};
