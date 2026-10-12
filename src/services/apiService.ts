import type { ProductInfo } from "../models/Product.js";
import { PossibleError } from "../utils/errorHandler.js";

const getProductData = async (urlSuffix: string): Promise<any> => {
  try {
    const response = await fetch(`https://dummyjson.com/products${urlSuffix}`);
    new PossibleError(!response.ok, "Could not fetch product API", "URLResult")
    const data = await response.json();
    return data;
  } catch (error) {
    throw error
  }
};

export const fetchProductsArray = async (limit = 1): Promise<ProductInfo[]> => {
  try {
    const productData = await getProductData(`?limit=${limit}`)
    new PossibleError(!Array.isArray(productData.products), "Expecting an array of products", "ArraySize")
    return productData.products;
  } catch (error) {
    console.error("Fetching product data failed");
    throw error;
  }
}

