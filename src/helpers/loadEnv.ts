import path from 'path';
import { config } from 'dotenv';

export const loadEnv = () => {
  const result = config({ path: path.join(__dirname, '../..', '.env') });
  if (result.error) throw new Error('unable to load enviroment vars');
};
