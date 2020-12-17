export const setTimeoutAsync = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
