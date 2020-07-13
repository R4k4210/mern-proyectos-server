const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

//Crea una tarea
//api/tareas
router.post('/',
    auth,
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("proyecto", "El proyecto es obligatorio").not().isEmpty()
    ],
    tareaController.crearTarea
)

//Obtiene tareas por proyecto
//api/tareas
router.get('/', 
    auth,
    tareaController.obtenerTareas
);


//Obtiene tareas por proyecto
//api/tareas
router.put('/:id', 
    auth,
    tareaController.actualizarTarea
);

//Elimina tarea
//api/tareas
router.delete('/:id', 
    auth,
    tareaController.eliminarTarea
);

module.exports = router;