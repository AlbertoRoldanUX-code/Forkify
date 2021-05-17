import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();
