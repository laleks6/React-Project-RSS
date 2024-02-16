const getApi = (value: string | number) => {
  const link = `https://swapi.dev/api/people/?search=${value}`;
  const request = fetch(link).then((json) => json.json());
  return request;
};

export default getApi;
