const DatabaseAPI = async (token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  return response.json();
};

const TokenAPI = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = response.json();
  return data.then((data) => DatabaseAPI(data.token));
};

export default TokenAPI;
