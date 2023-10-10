const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredRef = document.querySelector("ul#ingredients");

// const listElem = ingredients.map((elem) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = elem;
//   listItem.classList.add("item");
//   return listItem;
// });
// ingredRef.append(...listElem);

//2 variant
const listElem2 = ingredients
  .map((elem) => `<li class="item">${elem}</li>`)
  .join(" ");

ingredRef.insertAdjacentHTML("beforeend", listElem2);
