const category = document.querySelector("ul#categories");
const categoryName = category.querySelectorAll("h2");
console.log(`Number of categories: ${categoryName.length}`);

const items = category.querySelectorAll(".item");
items.forEach((item) => {
  const productt = item.querySelector("h2").textContent;
  const quantity = item.querySelectorAll("ul li").length;
  console.log(`Category: ${productt}`);
  console.log(`Elements: ${quantity}`);
});
