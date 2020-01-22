export const APIData = async (url) => {
  const response = await fetch(url);
  return response;
};
