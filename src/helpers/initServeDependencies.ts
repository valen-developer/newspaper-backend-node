import { loadEnv } from './loadEnv';
import { connectMongoDB } from './connectMongo';

export const initServerDependencies = () => {
  loadEnv();
  connectMongoDB();
};
