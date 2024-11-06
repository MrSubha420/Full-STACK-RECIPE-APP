# Recipe App Dashboard

Welcome to the **Recipe App Dashboard**! **live demo** [https://myrecipeappdashboard.netlify.app](https://myrecipeappdashboard.netlify.app) This app allows users to create, view, update, and delete recipes with ease. It’s built with the MERN stack and uses **Cloudinary** for image storage. The frontend is styled with **Tailwind CSS** for a modern, responsive UI.

---

## Features

- **Recipe Management**: Add, edit, delete, and view recipes.
- **Image Upload**: Upload recipe images using Cloudinary.
- **Responsive Design**: Built with Tailwind CSS, fully responsive across devices.
- **User Notifications**: Uses Toastify for error and success messages.
- **Form Validation**: Ensures input integrity for a better user experience.

## Tech Stack

### Frontend
- React with React Router
- Tailwind CSS
- Toastify for notifications

### Backend
- Express
- MongoDB with Mongoose
- Cloudinary (image storage)
- Node.js environment

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/MrSubha420/Full-STACK-RECIPE-APP.git
   ```
2. Navigate to the dashboard directory:
   ```bash
   cd Full-STACK-RECIPE-APP/dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run website:
   ```bash
     npm run dev
   ```
## Folder Structure:
```plaintext
src/
├── api/
│   └── recipeApi.js #api configuration
├── components/
│   ├── RecipeForm.jsx  #Recipe fro for create and update recipe
│   ├── RecipeList.jsx  #List of already created recipes
│   ├── RecipeDetail.jsx # Detailed over view of recipe
│   └── Navbar.jsx # Home button with create new recipe 
├── pages/
│   ├── Home.jsx 
│   ├── CreateRecipe.jsx # create a new recipe
│   ├── EditRecipe.jsx # edit pager of recipe
│   └── RecipeView.jsx # over view of each recipe
├── App.jsx
└── main.jsx
   ```
