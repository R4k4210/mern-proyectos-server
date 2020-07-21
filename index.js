const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();
conectarDB();

//Habilitamos cors
app.use(cors());

//Habilitar express.json
app.use(express.json({ extended: true }));

//Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})