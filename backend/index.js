
import express from 'express';
import postRoutes from './routes/posts.js';
import connectdb from './config/connectdb.js';
import * as dotenv from 'dotenv' 

dotenv.config()


const app = express();

app.use(express.json())



app.use('/posts', postRoutes);


const PORT = process.env.PORT;

//Call Database connection
connectdb();
//// server listen
app.listen(PORT,err=>{
err?console.log(err):console.log(`server is running on http://localhost:${PORT}`);;


})