import express from 'express';
import router from './weather_Router/weather_Router.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sequelize } from './weather_DB/weather_DB.js';

const app = express();
const port = process.env.PORT || 3010;

sequelize.sync()
.then((results => {
    console.log(results)
}))
.catch((err => {
    console.log(err)
}))

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use("/city", router);


app.listen(port, (req, res)=>{
    console.log(`server is working ${port}`)
})
