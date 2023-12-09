import { formatDate, requiresAuth } from "../utils/authUtils.js";
import ExpressError from "../../error/ExpressError.js";
import CartRepo from "../repos/cart-repo.js";
import getCartProductCategories from "./utils/getCartProductCategories.js";

/**
 * All the routes related to Cart are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's cart.
 * send GET Request at /api/user/cart
 * */
export const getCartItemsHandler = async(request, response, next) => {
  try {
    const userId = await requiresAuth(request, next);
    if (!userId) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }

    let newUserCart = await CartRepo.findByUserId(userId);
    newUserCart = await getCartProductCategories(newUserCart);
    
    response.status(200).json({message: "Successfully fetched cart items.", cart: newUserCart});
  } catch (error) {
    next(error);
  }
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart
 * body contains {product}
 * */

export const addItemToCartHandler = async(request, response, next) => {
  try {
    const userId = await requiresAuth(request, next);
    if (!userId) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }

    const { product } = request.body;
    if(!product._id){
      throw new ExpressError(402, "Product entered is wrong. Try again.");
    }
    
    const userCart = await CartRepo.findByUserProduct(userId, product._id);
    
    
    if(userCart.length === 0){
      const newCartItem = await CartRepo.insertNewCartItem(userId, product._id);
    }else{
      const updatedAt = formatDate();
      const newCartItem = await CartRepo.updateCartItemQuantity(userId, product._id, userCart[0].quantity + 1, updatedAt);
    }
    
    let newUserCart = await CartRepo.findByUserId(userId);
    newUserCart = await getCartProductCategories(newUserCart);
    
    response.status(201).json({message: "Successfully added cart item.", cart: newUserCart});
  } catch (error) {
    next(error);
  }
};

/**
 * This handler handles removing items to user's cart.
 * send DELETE Request at /api/user/cart/:productId
 * */

export const removeItemFromCartHandler = async(request, response, next) => {
  try {
    const userId = await requiresAuth(request, next);
    if (!userId) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }
    
    const { productId } = request.params;
    
    const result = await CartRepo.deleteCartItem(userId, productId);
    
    let newUserCart = await CartRepo.findByUserId(userId);
    newUserCart = await getCartProductCategories(newUserCart);
    
    response.status(201).json({message: "Successfully deleted cart item.", cart: newUserCart});
  } catch (error) {
    next(error);
  }
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart/:productId
 * body contains {action} (whose 'type' can be increment or decrement)
 * */

export const updateCartItemHandler = async(request, response, next) => {
  try {
    const productId = request.params.productId;
    
    const userId = await requiresAuth(request, next);
    if (!userId) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }

    let product = await CartRepo.findByUserProduct(userId, productId);
    if(product.length !== 1){
      throw new ExpressError(404, "Product quantity error occured. Not Found error");
    }

    product = product[0];
    
    const { action } = request.body;
    const updatedAt = formatDate();
    
    if (action.type === "increment") {
      const newCartItem = await CartRepo.updateCartItemQuantity(userId, product.productId, product.quantity + 1, updatedAt);
    } else  if (action.type === "decrement") {
  
      if(product.quantity === 1){
        const result = await CartRepo.deleteCartItem(userId, product.productId);
      }else{
        const newCartItem = await CartRepo.updateCartItemQuantity(userId, product.productId, product.quantity - 1, updatedAt);
      }
    }
  
    let newUserCart = await CartRepo.findByUserId(userId);
    newUserCart = await getCartProductCategories(newUserCart);
    
    response.status(201).json({message: "Cart quantity modification successful.", cart: newUserCart});
  } catch (error) {
    next(error);
  }
};
