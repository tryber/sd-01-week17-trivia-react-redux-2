export const DatabaseAPI = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  return response.json();
};
