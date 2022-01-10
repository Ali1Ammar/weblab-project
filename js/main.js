const cartItems = {};

document.querySelectorAll(".addcart").forEach((v) => {
  v.addEventListener("click", (v) => {
    title = v.target.parentNode.querySelector("h4").innerHTML;
    cartItems[title] ??= 0;
    cartItems[title]++;
    alert("added yo the cart (check cart icon at right corner)");
    reCalcShopCart();
  });
});

function reCalcShopCart() {
  document.getElementById("shopcartNum").innerHTML = Object.values(
    cartItems
  ).reduce((pre, curr) => pre + curr);
  document.getElementById("shopcart-dropdown").innerHTML =
    generateShopCartItem();
}

document.getElementById("shopcart").addEventListener("click", (v) => {
  let isHidden =
    document.getElementById("shopcart-dropdown").style.visibility == "hidden";
  ele = document.getElementById("shopcart-dropdown");
  if (isHidden) {
    ele.style.opacity = 1;
    ele.style.visibility = "visible";
    ele.style.height = "auto";
    ele.style.transform = "scaleY(1)";
  } else {
    ele.style.opacity = 0;
    ele.style.visibility = "hidden";
    ele.style.transform = "scaleY(0)";
  }
});

function generateShopCartItem() {
  let elem = "";
  for (const key in cartItems) {
    console.log(key);
    const element = cartItems[key];
    elem += `
      <div class="row">
      <span>${key}</span>
      <span>${element}</span>
  </div>
  `;
  }
  return elem;

}
