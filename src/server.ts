import dotenv from 'dotenv';
import { convertMipsFile } from './services/convertMipsToBinary';

dotenv.config();

const executeTask = async () => {
  const result = await convertMipsFile();
  console.log(result);
  return result;
};

executeTask();