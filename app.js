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

function scrollWindow() {
  let scrollWinCenter = (document.body.clientHeight - window.innerHeight) / 2;
  if (window.scrollY > scrollWinCenter) {
    openModal();
    window.removeEventListener("scroll", scrollWindow);
  }
}
window.addEventListener("scroll", scrollWindow);

//slider
$(".slider-block").slick({
  dots: true,
});

//like

let likeBtns = document.querySelectorAll(".like");
likeBtns.forEach((item) =>
  item.addEventListener("click", function (e) {
    if (e.target.classList.contains("heart")) {
      like(e.target, "heart", "heart-white");
    } else if (e.target.classList.contains("heart-white")) {
      dislike(e.target, "heart", "heart-white");
    }
  })
);
function like(e, cl1, cl2) {
  e.classList.add(cl2);
  e.classList.remove(cl1);
}
function dislike(e, cl1, cl2) {
  e.classList.add(cl1);
  e.classList.remove(cl2);
}
