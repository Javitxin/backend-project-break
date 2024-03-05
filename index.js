const express = require('express');
const dbConnection = require('./src/config/db.js');
const app = express();
const path = require('node:path');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index.js');

require('dotenv').config();

const PORT = process.env.PORT || 3000
const router = require('./src/routes/productRoutes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', router);

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

dbConnection()

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})