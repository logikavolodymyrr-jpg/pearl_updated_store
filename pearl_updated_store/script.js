console.log("PEARL upgraded loaded");

const products = {
  rings: [
    { name: "Золоте кільце Classic", price: "250$" },
    { name: "Срібне кільце Elegance", price: "120$" },
    { name: "Кільце з діамантом Luxe", price: "500$" }
  ],
  necklaces: [
    { name: "Кольє Pearl Drop", price: "300$" }
  ],
  earrings: [
    { name: "Сережки Shine", price: "180$" }
  ],
  bracelets: [
    { name: "Браслет Gold Line", price: "220$" }
  ]
};

const cards = document.querySelectorAll(".card[data-category]");
const productGrid = document.getElementById("productGrid");
const categoryTitle = document.getElementById("categoryTitle");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;
    showProducts(category);
  });
});

function showProducts(category) {
  productGrid.innerHTML = "";
  categoryTitle.textContent = "Категорія: " + category;

  products[category].forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h4>${p.name}</h4><p>${p.price}</p>`;
    productGrid.appendChild(div);
  });
}


let cart = [];

function addToCart(item){
  cart.push(item);
  renderCart();
}

function renderCart(){
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(p => {
    const div = document.createElement("div");
    div.className="card";
    div.innerHTML = `<h4>${p.name}</h4><p>${p.price}</p>`;
    cartItems.appendChild(div);

    total += parseInt(p.price);
  });

  cartTotal.textContent = "Всього: " + total + "$";
}

function showProducts(category) {
  productGrid.innerHTML = "";
  categoryTitle.textContent = "Категорія: " + category;

  products[category].forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h4>${p.name}</h4>
      <p>${p.price}</p>
      <button onclick='addToCart(${JSON.stringify({"name":"${p.name}","price":p.price})})'>Додати в кошик</button>
    `;
    productGrid.appendChild(div);
  });
}
