import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';

// State object
export const state = {
  recipe: {},
};

// Change state object
export const loadRecipe = async function (id) {
  try {
    //Make API call
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    //Reformat the object that we get, to get rid of the underscores
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(state.recipe);
  } catch (err) {
    console.error(err);
  }
};

// Implement project configuration module

// Implement general helper functions module
