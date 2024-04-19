const express = require('express')
const { getHomePage, postCreateNewUser, getCreateNewUser, getUpdateAUser,
    postUpdateUser, getDeleteUser, postDeleteUser
} = require('../controllers/homeController');


const router = express.Router();

router.get('/', getHomePage);
router.get('/create', getCreateNewUser);
router.get('/update/:userId', getUpdateAUser);
router.post('/create-user', postCreateNewUser);
router.post('/update-user', postUpdateUser);
router.get('/delete/:userId', getDeleteUser);
router.post('/delete-user', postDeleteUser);

module.exports = router;