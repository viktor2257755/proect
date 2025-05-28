let input = document.querySelector(".form-control")
let btn = document.querySelector(".btn-search")
let form = document.getElementById("searchForm");
let cards = document.querySelectorAll(".card")
let btn_bye = document.querySelectorAll(".btn-bye")
let cart_counter = document.querySelector(".cart-counter")

// form.addEventListener("submit", function(event) {
//   event.preventDefault(); 

//   let input_variable = input.value.trim().toLowerCase();
//   cards.forEach(element => {
//     if(input_variable != ""){
//       if(element.querySelector('.card-title').textContent.toLowerCase().search(input_variable) == -1){
//         element.style.display = "none"
//       } else {
//         element.style.display = "block"
//       }
//     } else {
//       element.style.display = "block"
//     }
//   });
// });

function goToCart(){
  window.location.href = 'cart.html';
}

document.addEventListener("DOMContentLoaded", () => {
  cart_counter.innerHTML = localStorage.getItem("count") || 0;

  let counter = +localStorage.getItem("count") || 0;

  window.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-cart")) {
      counter++;
      localStorage.setItem("count", counter);
      cart_counter.innerHTML = counter;

      let card = event.target.closest(".card")
              console.log(card)


      let product_info = {
          title: card.querySelector("h1").innerText,
          imgSrc: card.querySelector("img").getAttribute("src"),
          desc: card.querySelector('.desc').innerText,
          price: +card.querySelector('.price').innerText,
          id: card.querySelector('.id').innerText
      }

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product_info);
      console.log(product_info.price)
      localStorage.setItem("cart", JSON.stringify(cart));   
     }
  });
});