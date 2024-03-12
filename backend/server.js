const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes'); 
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000
const cors = require('cors');
app.use(cors({
    origin: "http://localhost:5173",
    methods:["GET", "POST", "PUT", "DELETE"],
    Credential:true
}))

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome'); 
})

app.use('/api/user',userRoutes)

// app.get('/api/chat',(req,res)=>{
//     res.send(chats);
// })

// app.get('/api/chat/:id',(req,res)=>{
//     // res.send(req.params.id);
//     const singleChat = chats.find((c)=>c._id === req.params.id);
//     res.send(singleChat);
// })

app.listen(`${PORT}`,console.log(`Server listening on ${PORT}`.blue.bold));