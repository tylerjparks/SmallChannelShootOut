import express from 'express'; 
import cors from 'cors';
import mongoose from 'mongoose'; 
import {signUpRouter} from './route/SignupRoute.js'; //importing route for signup
import {loginRouter} from './route/LoginRoute.js'; //importing route forr login
import {logoutRouter} from './route/LogoutRoute.js'; //importing route for logout
//import {talkRouter} from './route/TalkRoute.js'; 
import dotenv from 'dotenv'; 
import 'cookie-parser'; 
dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000; 

app.use(cors()); 
app.use(express.json()); 

const uri = process.env.ATLAS_URI; //uri for mongodb

mongoose.connect (uri, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () => {
    console.log("MongoDB has connected succesfully");
})

//app.post('/talk', talkRouter);
app.post('/signup', signUpRouter); //route for signup
app.post('/login', loginRouter);  //route for login
app.get('/logout', logoutRouter); //route for logout
app.listen(port, () => {
    console.log(`Server is runnig in port: ${port}`)
});

