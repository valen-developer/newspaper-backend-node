import path from 'path';
import { config } from 'dotenv';

export const loadEnv = () => {
  const envPath = path.join(__dirname, '../..', '.env');

  const result = config({ path: envPath });

  if (result.error) {
    console.log(result.error);
    throw new Error('unable to load enviroment vars');
  }
};
