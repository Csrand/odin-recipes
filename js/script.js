fetch("recipes.json")
  .then((response) => response.text()) // Usar text() primeiro para ver a resposta bruta
  .then((text) => {
    console.log(text); // Veja a resposta bruta
    return JSON.parse(text); // Se o texto parecer correto, então parse
  })
  .then((data) => {
    // Processar o JSON
    const lastRecipe = data.recipes[data.recipes.length - 1];
    const lastRecipeSection = document.querySelector("#last-recipe");
    lastRecipeSection.innerHTML = `
            <h3><a href="${lastRecipe.link}">${lastRecipe.title}</a></h3>
            <p>${lastRecipe.description}</p>
        `;
  })
  .catch((error) => console.error("Erro ao carregar as receitas:", error));
