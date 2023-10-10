function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const divRef = document.querySelector("div#boxes");
const inputNum = document.querySelector("input");

create.addEventListener("click", onCreate);
destroy.addEventListener("click", destroyBoxes);

function onCreate() {
  if (inputNum.value > 0 && inputNum.value <= 100) createBoxes(inputNum.value);
  else {
    divRef.innerHTML = `<div style = "color:red">Число має бути від 1 до 100</div>`;
  }
}

function createBoxes(amount) {
  let markUp = "";
  let size = 30;
  for (let index = 1; index <= amount; index++) {
    markUp += `<div class="pretty" style="color:${getRandomHexColor()}; height: ${size}px; width: ${size}px"> ${index}</div>`;
    size += 10;
  }

  //divRef.insertAdjacentHTML("beforeend", markUp);
  divRef.innerHTML = markUp;
}

function destroyBoxes() {
  divRef.innerHTML = "";
  inputNum.value = "";
}
