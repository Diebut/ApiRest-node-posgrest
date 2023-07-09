const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/cruds');

router.get('/usuarios/', getUsers);
router.get('/usuarios/:id', getUserById);
router.post('/usuarios/', createUser);
router.delete('/usuarios/:id', deleteUser);
router.put('/usuarios/:id', updateUser);

module.exports = router;