const express = require('express');
const dbConnection = require('./src/config/db.js');
const app = express();
const path = require('node:path');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index.js');

const session = require('express-session');
const cors = require('cors');
require('dotenv').config();
const {hashedSecret} = require('./src/config/configcryp.js')

const PORT = process.env.PORT || 3000
const router = require('./src/routes/productRoutes.js');

const publicPath = path.resolve(__dirname, 'public')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: hashedSecret,
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false},
}));


app.use('/', router);


app.use(express.static(publicPath));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

dbConnection()

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})