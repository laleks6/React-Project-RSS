const assemblyData = async (data: {
  total: number;
  limit: any;
  recipes: any[];
}) => {
  const dataCard: Record<string, string | number>[] = [];
  console.log('da', data.total, data.limit, data);
  for (let i = 0; i <= data.total; i++) {
    const dataResults = data.recipes[i];
    const obj = {
      name: '',
      mealType: '',
      difficulty: '',
      ingredients: '',
      instructions: '',
      rating: 0,
      image: '',
    };

    obj.name = dataResults.name as string;
    obj.mealType = dataResults.mealType as string;
    obj.difficulty = dataResults.difficulty as string;
    obj.ingredients = dataResults.ingredients as string;
    obj.instructions = dataResults.instructions as string;
    obj.rating = dataResults.rating as number;
    obj.image = dataResults.image as string;
    dataCard.push(obj);
  }
  return dataCard;
};
export default assemblyData;
