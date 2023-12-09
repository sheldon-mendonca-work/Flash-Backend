import * as cartController from '../controllers/CartController.js';

import express from 'express';


export const router = express.Router({mergeParams: true});

// address routes (public)

// address routes (private)
router.get("/", cartController.getCartItemsHandler);
router.post("/", cartController.addItemToCartHandler);
router.delete("/:productId", cartController.removeItemFromCartHandler);
router.post("/:productId", cartController.updateCartItemHandler);
