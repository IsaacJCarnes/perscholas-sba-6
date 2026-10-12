//Returns a price modified by its discount
export const calculateDiscount = (price: number, discountPercent: number): number => {
    const amount = price * (discountPercent / 100);
    return amount;
};