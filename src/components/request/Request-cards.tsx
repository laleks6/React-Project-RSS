const getApi = (value: string, skip: number, limit: number) => {
  const countSkip = skip === 1 ? 0 : skip * limit;
  const link = `https://dummyjson.com/recipes/search?q=${value}&limit=${limit}&skip=${countSkip}`;
  const request = fetch(link).then((res) => res.json());
  return request;
};

export default getApi;
