import express from 'express';
// import nodemailer from 'nodemailer';
import 'dotenv/config';
import cors from 'cors';


import { contact } from './controller/contact.js';
import {career, uploadMiddleware} from './controller/carrer.js'
import { welcome } from './controller/welcome.js';


const PORT = process.env.PORT || 5000;


const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // React App URLs
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get('/', welcome)
app.post('/api/contactUs', contact);
app.post('/api/career',  uploadMiddleware, career);



  app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  });

