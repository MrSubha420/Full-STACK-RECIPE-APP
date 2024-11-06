import 'package:shared_preferences/shared_preferences.dart';
import '../models/recipe.dart';

class SharedPreferencesHelper {
  static Future<void> saveFavorites(List<Recipe> recipes) async {
    final prefs = await SharedPreferences.getInstance();
    final recipesJson = recipes.map((recipe) => recipe.toJson()).toList();
    await prefs.setStringList('favoriteRecipes', recipesJson);
  }

  static Future<List<Recipe>> loadFavorites() async {
    final prefs = await SharedPreferences.getInstance();
    final recipesJson = prefs.getStringList('favoriteRecipes');
    return recipesJson != null
        ? recipesJson.map((recipe) => Recipe.fromJson(recipe)).toList()
        : [];
  }
}
