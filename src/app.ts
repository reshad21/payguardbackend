/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import path from 'path';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// Static files configuration
app.use(express.static(path.join(__dirname, "../public/")));

// Parsers
app.use(express.json());

// CORS Configuration
app.use(
  cors({
    origin: ['https://bike-rental-website.vercel.app', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],  // Allow PATCH method
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow these headers
    credentials: true,
  })
);



// Application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('App is running!');
});

// Global error handler
app.use(globalErrorHandler);

// 404 handler (Not Found)
app.use(notFound);

export default app;
