export const convertToCurrency = (amount: string | number, localeOptions?: Record<string, string | number>) => {
  if (typeof amount === "string") {
    amount = parseFloat(amount);
    if (isNaN(amount)) {
      return amount;
    }
  }

  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...(localeOptions ?? {}),
  };

  //   @ts-expect-error type error here
  return new Intl.NumberFormat("en-US", options).format(amount);
};

export const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};
