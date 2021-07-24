import mongoose from 'mongoose';

export const connectMongoDB = () => {
  mongoose.connect('http://localhost:27017/newspaper', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
