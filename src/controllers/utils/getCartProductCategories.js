import CategoryRepo from "../../repos/category-repo.js";

const getCartProductCategories = async (productList) => {
    const categories = await CategoryRepo.findByProducts();

    if(productList.length > 0){
        for(let product of productList){
          product.categoryName = [];
        }
    
        for(let product of productList){
          for(let category of categories){
            if(product.productId === category.productId){
              product.categoryName.push(category.categoryTitle);
              break;
            }
          }
        }
      }

      return productList;
}

export default getCartProductCategories;