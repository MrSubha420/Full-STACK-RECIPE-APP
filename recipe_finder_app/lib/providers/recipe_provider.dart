import 'package:flutter/material.dart';
import '../models/recipe.dart';
import '../services/recipe_api_service.dart';

class RecipeProvider with ChangeNotifier {
  final RecipeApiService _apiService = RecipeApiService();
  List<Recipe> _recipes = [];
  List<Recipe> _filteredRecipes = [];
  List<Recipe> _favoriteRecipes = [];

  List<Recipe> get recipes => _filteredRecipes.isNotEmpty ? _filteredRecipes : _recipes;
  List<Recipe> get favoriteRecipes => _favoriteRecipes;

  Future<void> fetchRecipes() async {
    _recipes = await _apiService.getAllRecipes();
    _filteredRecipes = _recipes;
    notifyListeners();
  }

  void searchRecipesByIngredients(String query) {
    _filteredRecipes = query.isEmpty
        ? _recipes
        : _recipes.where((recipe) =>
        recipe.ingredients.any((ingredient) =>
            ingredient.toLowerCase().contains(query.toLowerCase())))
        .toList();
    notifyListeners();
  }

  void toggleFavorite(Recipe recipe) {
    if (_favoriteRecipes.contains(recipe)) {
      _favoriteRecipes.remove(recipe);
    } else {
      _favoriteRecipes.add(recipe);
    }
    notifyListeners();
  }
}
