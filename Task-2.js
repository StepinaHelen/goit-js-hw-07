const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const ingredientList = ingredients.map(element => {
    const list = document.createElement("li");
    list.textContent = (element);
    return (list);
});
    
const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...ingredientList);