// Cart logic
let cartTotal = 0;
const cartDisplay = document.getElementById("cart-total");

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const price = parseFloat(button.dataset.price);
    cartTotal += price;
    cartDisplay.textContent = `Cart: $${cartTotal}`;
  });
});

// Search/filter logic
const searchInput = document.getElementById("search");
const productCards = document.querySelectorAll(".product-card");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  let visibleCount = 0;

  productCards.forEach((card) => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    const matches = name.includes(query);
    card.style.display = matches ? "block" : "none";
    if (matches) visibleCount++;
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
});
