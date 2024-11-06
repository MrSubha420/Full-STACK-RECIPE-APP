import 'package:flutter/material.dart';
import 'package:recipe_finder_app/models/recipe.dart';

class RecipeDetailScreen extends StatelessWidget {
  final Recipe recipe;

  const RecipeDetailScreen({Key? key, required this.recipe}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(recipe.name),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(12.0),
              child: Image.network(
                recipe.image,
                width: double.infinity,
                height: 200,
                fit: BoxFit.cover,
              ),
            ),
            const SizedBox(height: 16.0),
            Text(
              recipe.name,
              style: Theme.of(context).textTheme.headlineSmall,
            ),
            const SizedBox(height: 8.0),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  "Cooking Time: ${recipe.cookingTime} min",
                  style: Theme.of(context).textTheme.titleMedium,
                ),
                IconButton(
                  icon: Icon(Icons.favorite_border),
                  onPressed: () {
                    // Handle favorite action
                  },
                ),
              ],
            ),
            const SizedBox(height: 16.0),
            Text(
              "Ingredients",
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 8.0),
            ...recipe.ingredients.map((ingredient) {
              return ListTile(
                leading: const Icon(Icons.circle, size: 8),
                title: Text(ingredient),
              );
            }).toList(),
            const SizedBox(height: 16.0),
            Text(
              "Instructions",
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 8.0),
            ...recipe.instructions.map((instruction) {
              return ListTile(
                leading: const Icon(Icons.check, color: Colors.green),
                title: Text(instruction),
              );
            }).toList(),
          ],
        ),
      ),
    );
  }
}
