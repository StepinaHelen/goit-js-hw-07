const categoriesEL = document.querySelectorAll(".item");
console.log(`В списке ${categoriesEL.length} категории`);

categoriesEL.forEach(element => {
    const listEL = element.querySelectorAll("li");
    const nameOfCategoriesEL = element.querySelector("h2");
    console.log(`
 - Категория: ${nameOfCategoriesEL.textContent}
 - Количество элементов: ${listEL.length}`);
})