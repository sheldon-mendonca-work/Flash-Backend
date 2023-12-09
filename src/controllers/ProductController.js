import ProductRepo from "../repos/product-repo.js";
import ExpressError from "../../error/ExpressError.js";
import CategoryRepo from "../repos/category-repo.js";

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/products
 * */

export const getAllProductsHandler = async (request, response, next) => {
  try {
    
    const products = await ProductRepo.find();
    const categories = await CategoryRepo.findByProducts();

    for(let product of products){
      product.categoryName = [];
    }

    for(let product of products){
      for(let category of categories){
        if(product._id === category.productId){
          product.categoryName.push(category.categoryTitle);
          break;
        }
      }
    }
    response.status(200).json({ message:"Found all products.", products});
  } catch (error) {
    next(error);
  }
};

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

export const getProductHandler = async (request, response, next) => {
  const productId = request.params.productId;
  try {
    let product = await ProductRepo.findById(productId);
    const category = await CategoryRepo.findByProductId(productId);
    if(product.length !== 1){
      throw new ExpressError(402, "Product not found");
    }

    product = product[0];
    product.categoryName = [];
    
    for(let cat of category){
      product.categoryName.push(cat.categoryTitle);
    }
    response.status(200).json({message:"Found product.", product: product});
  } catch (error) {
    next(error);
  }
};
