import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/recipe.dart';
import '../providers/recipe_provider.dart';
import '../screens/recipe_detail_screen.dart';

class RecipeCard extends StatelessWidget {
  final Recipe recipe;

  RecipeCard({required this.recipe});

  @override
  Widget build(BuildContext context) {
    final recipeProvider = Provider.of<RecipeProvider>(context, listen: false);

    return Card(
      child: ListTile(
        leading: Image.network(recipe.image),
        title: Text(recipe.name),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text("Cooking time: ${recipe.cookingTime} mins"),
            Text("Ingredients: ${recipe.ingredients.join(', ')}"),
          ],
        ),
        trailing: IconButton(
          icon: Icon(
            recipeProvider.favoriteRecipes.contains(recipe)
                ? Icons.favorite
                : Icons.favorite_border,
          ),
          onPressed: () => recipeProvider.toggleFavorite(recipe),
        ),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => RecipeDetailScreen(recipe: recipe),
            ),
          );
        },
      ),
    );
  }
}
