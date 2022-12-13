//add to cart
let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);
let addToCartBtns = document.querySelectorAll(".to-cart");
// console.log(addToCartBtns);

// через цыкл
// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", function () {
//     console.log("clicked");
//   });
// }

// через forEach
// addToCartBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     console.log("clicked");
//   })
// );

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

//modal

let moreDetailsBtns = document.querySelectorAll(".details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

// moreDetailsBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     modal.classList.add("show");
//     modal.classList.remove("hide");
//   })
// );

// btnClose.addEventListener("click", function () {
//   modal.classList.add("hide");
//   modal.classList.remove("show");
// });
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
  console.log(e.target);
  if (e.target === modal) {
    closeModal();
  }
  //   if (e.target === modal || e.target === btnClose) {
  //     closeModal();
  //   }
  //   if (e.target === btnClose) {
  //     closeModal();
  //   }
});

//slider
$(".slider-block").slick({
  dots: true,
});
