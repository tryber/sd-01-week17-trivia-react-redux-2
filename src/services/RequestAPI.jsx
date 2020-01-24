const switchBy = (url, filter, nameFilter) => {
  switch (filter) {
    case 'any':
      return url;
    default:
      return url.concat(`&${nameFilter}=${filter}`);
  }
};

const TokenAPI = async (token, category, type, difficulty) => {
  const baseUrl = 'https://opentdb.com/api.php?amount=5';
  const categoryUrl = switchBy(baseUrl, category, 'category');
  const difficultyltUrl = switchBy(categoryUrl, difficulty, 'difficulty');
  const typeUrl = switchBy(difficultyltUrl, type, 'type');
  const finalUrl = typeUrl.concat(`&token=${token}`);
  const ResponseDatabase = await fetch(finalUrl);
  return ResponseDatabase.json();
};

export const DatabaseAPI = async (category, type, difficulty) => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const ResponseToken = response.json();
  return ResponseToken.then((data) => TokenAPI(data.token, category, type, difficulty));
};

export const CategoriesAPI = async () => {
  const ResponseCategories = await fetch('https://opentdb.com/api_category.php');
  return ResponseCategories.json();
};
