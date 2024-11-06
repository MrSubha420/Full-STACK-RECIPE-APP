import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/recipe_provider.dart';
import '../widgets/recipe_card.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final recipeProvider = Provider.of<RecipeProvider>(context, listen: false);
    recipeProvider.fetchRecipes();

    return Scaffold(
      appBar: AppBar(
        title: Text('Recipe Finder'),
        actions: [
          IconButton(
            icon: Icon(Icons.favorite),
            onPressed: () => Navigator.pushNamed(context, '/favorites'),
          ),
        ],
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              decoration: InputDecoration(
                labelText: 'Search by ingredients...',
                border: OutlineInputBorder(),
              ),
              onChanged: (query) => recipeProvider.searchRecipesByIngredients(query),
            ),
          ),
          Expanded(
            child: Consumer<RecipeProvider>(
              builder: (context, provider, _) {
                final recipes = provider.recipes;
                return recipes.isEmpty
                    ? Center(child: Text('No recipes found.'))
                    : ListView.builder(
                  itemCount: recipes.length,
                  itemBuilder: (context, index) {
                    return RecipeCard(recipe: recipes[index]);
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
