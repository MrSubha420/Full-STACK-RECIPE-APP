// src/api/recipeApi.js
import axios from 'axios';

const apiUrl = 'https://recipeappbackend-p6va.onrender.com/api/v1/recipe';

export const createRecipe = (data) => axios.post(`${apiUrl}/create`, data);
export const getAllRecipes = () => axios.get(`${apiUrl}/gateall`);
export const getSingleRecipe = (id) => axios.get(`${apiUrl}/singleRecipe/${id}`);
export const deleteRecipe = (id) => axios.delete(`${apiUrl}/delete/${id}`);
export const updateRecipe = (id, data) => axios.put(`${apiUrl}/update/${id}`, data);
