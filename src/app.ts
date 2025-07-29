import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import envVars from './config/env';
import notFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorHandler';
import { Routes } from './router';

const app = express();

// Cors configurations

// const whitelist = [
//   "http://localhost:5000",
//   "http://localhost:5173",
//   "https://sandbox.sslcommerz.com",
// ];

// const corsOptions: CorsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

// Middlewares
app.use(
  expressSession({
    secret: envVars.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Api routing version 1
app.use('/api/v1', Routes);

// Testing api
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: 'Ride Booking Server Running',
  });
});

// Error Handler
app.use(globalErrorHandler);
app.use(notFound);

export default app;
