const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const {check} = require('express-validator');

// Crea Proyectos
// api/proyectos
router.post('/', 
    auth,
    [
        check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()
    ],
    proyectoController.crearProyecto
);

// Obtiene Proyectos
// api/proyectos
router.get('/', 
    auth,
    proyectoController.obtenerProyectos
);

// Actualiza un proyecto por id
// api/proyectos/:id
router.put('/:id', 
    auth,
    [
        check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);


// Eliminar un proyecto por id
// api/proyectos/:id
router.delete('/:id', 
    auth,
    proyectoController.eliminarProyecto
);

module.exports = router;