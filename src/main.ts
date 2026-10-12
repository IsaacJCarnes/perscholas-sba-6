import { Product, type ProductInfo } from "./models/Product.js";
import { fetchProductsArray } from "./services/apiService.js";

const onStartup = async () => {
    try {
        const productInfo:ProductInfo[] = await fetchProductsArray(5);
        const products = productInfo.map((productInfo):Product => new Product(productInfo));

        products.forEach((p) => {
            p.displayDetails();
        });
    } catch (error: any) {
        console.error(`${error.name}: ${error.message}`);
    }
}

onStartup();