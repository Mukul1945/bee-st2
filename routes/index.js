const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.post('/create-task', homeController.task);
router.get('/profile/:id', homeController.profile);
router.get('/complete/:id', homeController.complete);
router.get('/completed-task' , homeController.completed)
router.get('/delete-task/:id', homeController.delete);
router.get('/delete-Completedtask/:id', homeController.deleteCompleted);
router.post('/update-task/:id', homeController.update);

module.exports = router;