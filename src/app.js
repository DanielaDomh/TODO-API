const express = require('express');
const cors = require('cors');
const userRoutes = require("./routes/user.routes");
const db = require('./utils/database');
const initModels = require('./models/initModels');
require('dotenv').config();

initModels();

const PORT = process.env.PORT ?? 7000;

db.authenticate()
.then(() => {
    console.log('Base de datos conectada');
})
.catch(error => console.log('error'))

//{alter:true}
db.sync().then(() => console.log('Base de datos sincronizada'))
const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);

app.get('/', (req,res) => {
res.send('Servidor funcionando!');
});

app.listen(PORT, () => {
console.log(`servidor escuchando en el puerto ${PORT}`)
});