import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { productRoutes } from './routes/productRoutes.js'; // Importing product routes
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // CORS is a middleware that allows cross-origin requests
app.use(helmet()); // helmet is a security middleware that helps secure Express apps by setting various HTTP headers
app.use(morgan('dev')); // morgan is a logging middleware that logs HTTP requests in the console

app.get('/', (req, res) => {
  res.send('Welcome to the PERN Product Store API');
});

app.get('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT); 
  console.log('Visit http://localhost:' + PORT);
});