// lib/services/recipe_api_service.dart

import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/recipe.dart';

class RecipeApiService {
  static const String baseUrl = 'https://recipeappbackend-p6va.onrender.com/api/v1/recipe';

  Future<List<Recipe>> getAllRecipes() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/gateall'));

      if (response.statusCode == 200) {
        final List<dynamic> recipeList = json.decode(response.body);
        return recipeList.map((json) => Recipe.fromJson(json)).toList();
      } else {
        print('Error ${response.statusCode}: ${response.body}');
        throw Exception('Failed to load recipes. Status code: ${response.statusCode}');
      }
    } catch (e) {
      print('Exception caught: $e');
      throw Exception('Failed to load recipes');
    }
  }
}
