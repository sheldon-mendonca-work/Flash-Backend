import * as categoryController from '../controllers/CategoryController.js';

import express from 'express';


export const router = express.Router({mergeParams: true});

// address routes (public)
router.get("/", categoryController.getAllCategoriesHandler);
router.get("/:categoryId", categoryController.getCategoryHandler);

// address routes (private)
