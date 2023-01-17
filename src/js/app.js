import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {

  let prices = document.querySelectorAll('.price');

  prices.forEach(price => {

    if (price.classList.contains('hot')) {

      price.append('🔥');
    }
  });
});
