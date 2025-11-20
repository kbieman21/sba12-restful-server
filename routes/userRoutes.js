const express = require('express');
const {getAllUsers, getUserbyId} = require('../controllers/userController')



// Router
const userRouter = express.Router();


/**
 * GET /api/user
 */

userRouter.get('/', getAllUsers);

/**
 * GET /api/user/:id
 */


userRouter.get('/:id', getUserbyId);

module.exports = userRouter;