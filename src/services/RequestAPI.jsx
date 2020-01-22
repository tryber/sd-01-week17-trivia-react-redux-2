const TokenAPI = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const token = response.json();
  return token.then((token) => DatabaseAPI(token.token))
};

const DatabaseAPI = async (token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  return response.json();
};

export default TokenAPI;
