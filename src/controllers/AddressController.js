import ExpressError from "../../error/ExpressError.js";
import AddressRepo from "../repos/address-repo.js";
import UserRepo from "../repos/user-repo.js";
import { formatDate, requiresAuth } from "../utils/authUtils.js";

/**
 * All the routes related to Address are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's address.
 * send GET Request at /api/user/address
 * */

export const getAddressItemsHandler =  async (request, response, next) => {
  try {
    const userId = await requiresAuth(request, next);
    if (!userId) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }

    const userAddressList = await AddressRepo.findByUserId(userId);
  
    response.status(200).json({ message: "Found all addresses", addressList : userAddress})
  
  } catch (error) {
    next(error);
  }
};

/**
 * This handler handles adding items to user's Address.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addItemToAddressHandler = async (request, response, next) => {
  try {
    
    const userId = await requiresAuth(request, next);
    if (!userId) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }

    const foundUser = await UserRepo.findById(userId);
    const addressList = await AddressRepo.findByUserId(userId);
    
    const { address } = request.body;
    
    const newAddressCount = foundUser[0].addressCount + 1;

    const newAddress = await AddressRepo.insert(address, userId, newAddressCount);
    const updatedUser = await UserRepo.updateAddressCount(userId, newAddressCount);

    response.status(201).json({ message: "Address has been successfully added.", addressList: [...addressList, ...newAddress], updatedUser });
  } catch (error) {
    console.log(error)
    next(error);
  }
};

/**
 * This handler handles removing address to user's address.
 * send DELETE Request at /api/user/address
 * 
 * */

export const removeItemFromAddressHandler = async (request, response, next) => {
  const userId = await requiresAuth(request, next);
  try {
    if (!userId) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }
    
    const foundUser = await UserRepo.findById(userId);
    let addressList = await AddressRepo.findByUserId(userId);
    const addressId = Number(request.params.addressId);
    const addressToBeDeleted = addressList.find(item => item.addressIndex === addressId);

    if(!addressToBeDeleted){
      throw new ExpressError(404, "The address you entered is not correct. Not Found error");
    } 

    await AddressRepo.deleteAddress(addressToBeDeleted._id);
    
    const newAddressCount = foundUser[0].addressCount - 1;
    const temp = await UserRepo.updateAddressCount(userId, newAddressCount);
    const newAddressList =  addressList.filter((item) => item.addressIndex !== addressId);

    response.status(200).json({message: "Address has been successfully deleted.", addressList: newAddressList, temp});
  } catch (error) {
    next(error);
  }
};

/**
 * This handler handles adding items to user's address.
 * send POST Request at /api/user/address/:addressId
 * body contains {address}
 * */

export const updateAddressItemHandler = async (request, response, next) => {
  try {
    const addressId = Number(request.params.addressId);
    const userId = await requiresAuth(request, next);
    if (!userId) {
      throw new ExpressError(404, "The email you entered is not Registered. Not Found error");
    }
    let userAddress = await AddressRepo.findByUserId(userId);
    let { address } = request.body;
    address.updatedAt = formatDate();
    userAddress = userAddress.filter((item) => item.addressIndex !== addressId);
    
    const resAddress = await AddressRepo.update(address, addressId);

    userAddress = [...userAddress, resAddress[0]];
    
    response.status(200).json({ addressList: userAddress });
  } catch (error) {
    next(error);
  }
};
