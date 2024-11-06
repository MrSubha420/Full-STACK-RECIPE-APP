import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/recipe_provider.dart';
import '../widgets/recipe_card.dart';

class FavoriteScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final recipeProvider = Provider.of<RecipeProvider>(context);

    return Scaffold(
      appBar: AppBar(title: Text('Favorite Recipes')),
      body: recipeProvider.favoriteRecipes.isEmpty
          ? Center(child: Text('No favorite recipes found.'))
          : ListView.builder(
        itemCount: recipeProvider.favoriteRecipes.length,
        itemBuilder: (context, index) {
          return RecipeCard(recipe: recipeProvider.favoriteRecipes[index]);
        },
      ),
    );
  }
}
