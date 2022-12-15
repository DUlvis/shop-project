//add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".to-cart");

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

//modal

let moreDetailsBtns = document.querySelectorAll(".details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

btnClose.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

function showModalByScroll() {
  if (window.scrollY > document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

//slider
$(".slider-block").slick({
  dots: true,
});

//like

let likeBtns = document.querySelectorAll(".like-btn");
likeBtns.forEach((item) =>
  item.addEventListener("click", function (btn) {
    btn.target.classList.toggle("liked");
  })
);

//lesson 20
let incrementBtns = document.querySelectorAll(".increment-btn");
let decrementBtns = document.querySelectorAll(".decrement-btn");
let inputFields = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };

  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

const counter1 = new Counter(
  incrementBtns[0],
  decrementBtns[0],
  inputFields[0]
);

const counter2 = new Counter(
  incrementBtns[1],
  decrementBtns[1],
  inputFields[1]
);
const counter3 = new Counter(
  incrementBtns[2],
  decrementBtns[2],
  inputFields[2]
);
const counter4 = new Counter(
  incrementBtns[3],
  decrementBtns[3],
  inputFields[3]
);
const counter5 = new Counter(
  incrementBtns[4],
  decrementBtns[4],
  inputFields[4]
);
const counter6 = new Counter(
  incrementBtns[5],
  decrementBtns[5],
  inputFields[5]
);
const counter7 = new Counter(
  incrementBtns[6],
  decrementBtns[6],
  inputFields[6]
);
const counter8 = new Counter(
  incrementBtns[7],
  decrementBtns[7],
  inputFields[7]
);
const counter9 = new Counter(
  incrementBtns[8],
  decrementBtns[8],
  inputFields[8]
);
