const recipeMenu = [
  {
    recipeName: 'Beef Birria Tacos',
    introduction: 'Hi, this is a beef birria tacos recipe',
    ingredients: [1, 2, 3],
  },
  {
    recipeName: 'Pho Bo (Beef Pho)',
    introduction: 'Hi, this is a beef pho recipe',
    ingredients: [4, 5 ,6],
  },

  {
    recipeName: 'Focaccia',
    introduction: 'Hi, this is a Focaccia recipe',
    ingredients: [7, 8 , 9],
  }
];


function renderRecipe(recipeIndex) {
  const contentDisplayElement = document.querySelector('.js-content-display');
  recipe = recipeMenu[recipeIndex];
  content = `
    <h2>${recipe.recipeName}</h2>
    <p>${recipe.introduction}</p>
    <p>Ingredients:${listToHTML(recipe.ingredients)} </p>
    `;
  contentDisplayElement.innerHTML = content;
}

document.querySelectorAll('.js-menu-recipe')
  .forEach((recipeButton, index) => {
    recipeButton.addEventListener('click', () => {
      renderRecipe(index);
    });
  });

function listToHTML(li) {
  let listHTML = '<ul>';
  li.forEach((item, index) => {
    listHTML += `<li>${item}</li>\n`;
  });
  listHTML += '</ul>'
  return listHTML;
}