const router = require('express').Router();
const errorHandler = require('../middlewares/errorHandler.js');
const authentication = require('../middlewares/authentication.js');

const UserController = require('../controllers/UserController.js');
const NoteController = require('../controllers/NoteController.js');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.use(authentication);

router.get('/notes', NoteController.getNotes);
router.post('/notes', NoteController.postNote);

router.use(errorHandler);

module.exports = router;