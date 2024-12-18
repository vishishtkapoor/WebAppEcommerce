export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidPrice = (price: string): boolean => {
  const numPrice = parseFloat(price);
  return !isNaN(numPrice) && numPrice >= 0;
};