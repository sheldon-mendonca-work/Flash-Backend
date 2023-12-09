import * as wishlistController from '../controllers/WishlistController.js';

import express from 'express';


export const router = express.Router({mergeParams: true});

// address routes (public)
router.get("/", wishlistController.getWishlistItemsHandler);
router.post("/", wishlistController.addItemToWishlistHandler);
router.delete("/:productId", wishlistController.removeItemFromWishlistHandler);


// address routes (private)
