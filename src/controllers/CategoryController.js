import ExpressError from "../../error/ExpressError.js";
import CategoryRepo from "../repos/category-repo.js";

/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/categories
 * */

export const getAllCategoriesHandler = async (request, response, next) => {
  try {
    const categories = await CategoryRepo.find();
    response.status(200).json({ message:"Found all categories.", categories});
  } catch (error) {
    next(error);
  }
};

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/user/category/:categoryId
 * */

export const getCategoryHandler = async (request, response, next) => {
  const categoryId = request.params.categoryId;
  try {
    const category = await CategoryRepo.findById(categoryId);
    if(category.length !== 1){
      throw new ExpressError(402, "category not found");
    }
    response.status(200).json({message:"Found category.", category: category[0]});
  } catch (error) {
    next(error);
  }
};
