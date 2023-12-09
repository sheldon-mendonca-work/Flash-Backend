import * as authController from '../controllers/AuthController.js';

import express from 'express';


export const router = express.Router({mergeParams: true});

// address routes (public)
router.post("/signup", authController.signupHandler);
router.post("/login", authController.loginHandler);

// address routes (private)
