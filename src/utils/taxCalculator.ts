//Returns a different tax rate based on the product category
const getTaxRate = (category: string): number => {
    let defaultTax: number  = 4.75;
    let groceryTax: number = 3;
    return category.toLowerCase() === "groceries" ? groceryTax : defaultTax;
}

//Returns the price modified by the tax rate
export const calculateTax = (price: number, category: string): number => {
    const amount: number = price * (getTaxRate(category) / 100);
    return amount
};