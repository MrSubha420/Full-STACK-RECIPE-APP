# Recipe Finder 🍽️

A Flutter-based app that allows users to search for recipes based on ingredients they have at home, view detailed recipe information, save favorite recipes, and get random recipe suggestions.

## Key Features 🚀
- **Ingredient Input**: Input the ingredients you have on hand and find recipes that match.
- **Recipe Search**: Fetch recipes from a public API based on the ingredients provided.
- **Recipe Details**: View detailed information such as:
  - Cooking time
  - Number of servings
  - Ingredients
  - Step-by-step instructions
  - Nutritional information
- **Favorites**: Save recipes to favorites for quick access later using local storage.
- **Random Recipe**: Get inspiration by viewing a random recipe suggestion.

---

## Project Structure 📂

```bash
/recipe_finder
├── android/                # Android-specific files
├── ios/                    # iOS-specific files
├── lib/
│   ├── models
|   |     ├── recipe.dart  #recipe model
│   ├── providers
|   |     ├── recipe_provider.dart 
│   ├── Services
|   |     ├── recipe_api_service.dart  # Services for API calls and local storage
│   ├── screens
|   |     ├── recipe_detail_screen.dart  # Detailed view of a recipe
|   |     ├── favorite_screen.dart   # saved and view your favourite recipe list
|   |     ├── home_screen.dart   #hope screen your app
│   ├── utils
|   |     ├── shared_preferences_helper.dart
|   ├── widgets
|   |     ├── recipe_card.dart
|   ├── main.dart
│   
├── pubspec.yaml            # Flutter dependencies
├── README.md               # Project documentation
```

## Getting Started 🛠️

### Prerequisites
- [Flutter SDK](https://flutter.dev/docs/get-started/install) installed on your machine.
- 
### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/MrSubha420/Full-STACK-RECIPE-APP.git
   cd recipe_finder_app
   ```

2. Install dependencies
   ```bash
   flutter pub get
   ```

3. Run the app
  ```bash
  flutter run 
  ```

## Live Demo 🎥
https://github.com/user-attachments/assets/27b3d1b2-2de6-443a-ad0a-dbae3d37e619

# IF you wank to .apk file for android 📂
  - go to the directory - [download](https://drive.google.com/file/d/1KfGjr9bezwOrnA0kdco0kcx3vu2A-TNR/view?usp=sharing).
  - download base.apk 
  - install the apk -> run it
