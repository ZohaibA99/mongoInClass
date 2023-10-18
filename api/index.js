const express = require('express');
const router = express.Router();
const ctrlTask = require('../controller');


router.get('/tasks', ctrlTask.get);

router.get('/tasks/:id', ctrlTask.getById);

router.post('/tasks', ctrlTask.create);

router.put('/tasks/:id', ctrlTask.update);

//router.patch("/contacts/:id/favorites", ctrlTask.updateFavorites)

router.delete('/tasks/:id', ctrlTask.remove);

module.exports = router;