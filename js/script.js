// In script.js

// Select the section in the HTML where the latest recipe will be displayed
const lastRecipeSection = document.querySelector("#last-recipe");

// Fetch the data from recipes.json
fetch("recipes.json")
  .then((response) => response.json()) // Convert the response to JSON
  .then((data) => {
    // Get the last recipe in the array
    const lastRecipe = data.recipes[data.recipes.length - 1];

    // Insert HTML for the latest recipe
    lastRecipeSection.innerHTML = `
            <h2>Last Recipe</h2>
            <h3><a href="${lastRecipe.link}">${lastRecipe.title}</a></h3>
            <p>${lastRecipe.description}</p>
        `;
  })
  .catch((error) => console.error("Error loading recipes:", error));
