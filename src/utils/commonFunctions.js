export const isDevelopmentOrTest = () => {
  if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test")
    return true;
  return false;
};
