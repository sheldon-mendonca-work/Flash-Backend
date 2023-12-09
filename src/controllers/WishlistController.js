import { requiresAuth } from "../utils/authUtils.js";
import ExpressError from "../../error/ExpressError.js";
import WishlistRepo from "../repos/wishlist-repo.js";
import getCartProductCategories from "./utils/getCartProductCategories.js";

/**
 * All the routes related to Wishlist are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's wishlist.
 * send GET Request at /api/user/wishlist
 * */

export const getWishlistItemsHandler = async(request, response, next) => {
  try {
    const userId = await requiresAuth(request, next);
    if (!userId) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }

    let userWishlist = await WishlistRepo.findByUserId(userId);
    userWishlist = await getCartProductCategories(userWishlist);

    response.status(200).json({message: "Successfully fetched wishlist items.", wishlist: userWishlist});
    
  } catch (error) {
    next(error);
  }
};

/**
 * This handler handles adding items to user's wishlist.
 * send POST Request at /api/user/wishlist
 * body contains {product}
 * */

export const addItemToWishlistHandler = async(request, response, next) => {
  try {
    const userId = await requiresAuth(request, next);
    if (!userId) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }

    const { product } = request.body;
    
    const result = await WishlistRepo.insertNewWishlistItem(userId, product._id);
    
    let newUserWishlist = await WishlistRepo.findByUserId(userId);
    newUserWishlist = await getCartProductCategories(newUserWishlist);
    
    response.status(201).json({message: "Successfully added product to wishlist.", wishlist: newUserWishlist});
  } catch (error) {
    next(error);
  }
};

/**
 * This handler handles removing items to user's wishlist.
 * send DELETE Request at /api/user/wishlist/:productId
 * */

export const removeItemFromWishlistHandler = async(request, response, next) => {
  const userId = await requiresAuth(request, next);
  try {
    if (!userId) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }
    
    const productId = request.params.productId;
    const result = await WishlistRepo.deleteWishlistItem(userId, productId);

    let newUserWishlist = await WishlistRepo.findByUserId(userId);
    newUserWishlist = await getCartProductCategories(newUserWishlist);
    
    response.status(200).json({message: "Successfully removed wishlist item.", wishlist: newUserWishlist});
  } catch (error) {
    next(error);
  }
};
