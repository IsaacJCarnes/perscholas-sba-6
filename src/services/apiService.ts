import type { ProductInfo } from "../models/Product.js";
import { PossibleError } from "../utils/errorHandler.js";

//Takes query parameters for a url and calls from the dummy json API with that query
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

//Takes a limit and returns an array of products of that size
export const fetchProductsArray = async (limit = 1): Promise<ProductInfo[]> => {
  try {
    const productData = await getProductData(`?limit=${limit}`)
    new PossibleError(!Array.isArray(productData.products), "Expecting an array of products", "ExpectedArray")
    return productData.products;
  } catch (error) {
    console.error("Fetching product data failed");
    throw error;
  }
}

