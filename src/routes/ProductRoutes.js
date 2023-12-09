import * as productController from '../controllers/ProductController.js';

import express from 'express';


export const router = express.Router({mergeParams: true});

// address routes (public)
router.get("/", productController.getAllProductsHandler);
router.get("/:productId", productController.getProductHandler);

// address routes (private)
