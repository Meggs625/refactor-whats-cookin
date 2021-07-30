class IngredientRepository {
  constructor(data) {
    this.data = data;
  }

  returnIngredientName(id) {
    let ingredientInfo = this.data.find(ingredient => {
      if (ingredient.id === id) {
        return ingredient
      }
    });
    return ingredientInfo.name;
  }
}

export default IngredientRepository;