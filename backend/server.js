import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import morgan from 'morgan';
import {notFound,errorHandler} from './middlewares/errorHandler.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan('dev'));
//api routes
app.get('/',(req,res)=>res.send("Hello World"));
app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);



//custom error handlers

//custom err middleware
app.use(notFound)
app.use(errorHandler)
//DB connectivity
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
}).then(()=>console.log('connected db'))
.catch(err=>console.error(err));



//server startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
