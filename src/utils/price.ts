export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const calculateTotal = (prices: number[]): number => {
  return prices.reduce((sum, price) => sum + price, 0);
};