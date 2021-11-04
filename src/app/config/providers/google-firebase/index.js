import config from './config'
import { initializeApp } from "firebase/app";

const app = initializeApp(config);

export default app;