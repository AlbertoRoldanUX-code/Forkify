import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//Make first API call
const controlRecipes = async function () {
  try {
    //Get id from the hash
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    //1º Loading recipe
    await model.loadRecipe(id);

    //2º Render the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
  }
};

controlRecipes();

// Listen for hashchange and load events
['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, controlRecipes)
);

// Refactor function from the ingredients section
