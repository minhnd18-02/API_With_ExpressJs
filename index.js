import express from 'express';
import bodyParser from 'body-parser';	
import {router} from './routers/countriesRoutes.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send("Hello");
});

app.use('/api/countries', router);


app.listen(port, () => console.log(`Server running on http://localhost:${port}`));