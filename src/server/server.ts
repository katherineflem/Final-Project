import * as express from 'express';
import routes from '../server/routes';
import * as path from 'path'
import * as morgan from 'morgan'


const app = express();
 
app.use(express.static('public'));
app.use(express.json())
app.use(routes);
app.use(morgan('dev'))

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
