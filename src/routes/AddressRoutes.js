import * as addressController from '../controllers/AddressController.js';

import express from 'express';


export const router = express.Router({mergeParams: true});

// address routes (public)
// router.post("/signup", signupHandler);

// address routes (private)
router.get("/", addressController.getAddressItemsHandler);
router.post("/", addressController.addItemToAddressHandler);
router.delete("/:addressId", addressController.removeItemFromAddressHandler);
router.post("/:addressId", addressController.updateAddressItemHandler);
