import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils.js";
import UserRepo from "../repos/user-repo.js";
import sign from "jwt-encode";
import ExpressError from "../../error/ExpressError.js";
import AddressRepo from "../repos/address-repo.js";
import CartRepo from "../repos/cart-repo.js";
import WishlistRepo from "../repos/wishlist-repo.js";
import getProductCategories from "./utils/getProductCategories.js";
/**
 * All the routes related to Auth are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles user signups.
 * send POST Request at /api/auth/signup
 * body contains {firstName, lastName, email, password}
 * */

export const signupHandler = async(request, response, next) => {
  const { email, password, addressList, ...rest } = request.body;
  
  try {
    // check if email already exists
    const foundUser = await UserRepo.findByEmail(email);
  
    if (foundUser.length) {
      throw new ExpressError(422, "Unprocessable Entity. Email Already Exists.");
    }

    const _id = uuid();
    const newUser = {
      _id,
      email,
      password,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      ...rest,
    };
    
    let createdUser = await UserRepo.insert(newUser);
    const encodedToken = sign({ _id, email }, process.env.REACT_APP_JWT_SECRET);
    const createdAddress = await AddressRepo.insert(addressList[0].address, _id, 1);
    
    createdUser.addressCount = 1;
    createdUser.addressList = createdAddress;
    createdUser.cart = [];
    createdUser.wishlist = [];

    response.status(201).json({ message: "User has been created", createdUser, encodedToken });
  } catch (error) {
    next(error);
  }
};

/**
 * This handler handles user login.
 * send POST Request at /api/auth/login
 * body contains {email, password}
 * */

export const loginHandler = async(request, response, next) => {
  const { email, password } = request.body;
  try {
    let foundUser = await UserRepo.findByEmail(email);
    if (!foundUser.length || foundUser.length > 1) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }
    
    foundUser = foundUser[0];
    if (password === foundUser.password) {
      const encodedToken = sign(
        { _id: foundUser._id, email },
        process.env.REACT_APP_JWT_SECRET
      );
      
      const addressList = await AddressRepo.findByUserId(foundUser._id);
      foundUser.addressList = addressList;

      let foundCart = await CartRepo.findByUserId(foundUser._id);

      foundUser.cart = await getProductCategories(foundCart);

      let foundWishlist = await WishlistRepo.findByUserId(foundUser._id);
      
      foundUser.wishlist = await getProductCategories(foundWishlist);

      response.status(200).json({ message: "Logged in successfully", foundUser: foundUser, encodedToken });
    }else{
      throw new ExpressError(401, "The credentials you entered are invalid. Unauthorized access error.");
    }
  } catch (error) {
    next(error)
  }
};
