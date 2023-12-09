import CategoryRepo from "../../repos/category-repo.js";

const getProductCategories = async (productList) => {
    const categories = await CategoryRepo.findByProducts();

    if(productList.length > 0){
        for(let product of productList){
          product.categoryName = [];
        }
    
        for(let product of productList){
          for(let category of categories){
            if(product._id === category.productId){
              product.categoryName.push(category.categoryTitle);
              break;
            }
          }
        }
      }

      return productList;
}

export default getProductCategories;