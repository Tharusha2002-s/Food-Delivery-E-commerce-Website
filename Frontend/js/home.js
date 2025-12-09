// --- DATA ---
const restaurants = [
  {
    id: 1,
    name: "Kottu Labs",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    tags: "Sri Lankan • Street Food",
    fee: 150,
    menu: [
      {
        id: 101,
        name: "Chicken Cheese Kottu",
        desc: "Spicy roti stir-fry with cheese.",
        price: 1200,
        img: "https://t3.ftcdn.net/jpg/03/35/05/27/360_F_335052737_X2E1F1X9X9X9.jpg",
      },
      {
        id: 102,
        name: "Iced Milo",
        desc: "Large cup of chilled Milo.",
        price: 400,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_X.jpg",
      }, // Placeholder
    ],
  },
  {
    id: 2,
    name: "Burger King",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    tags: "American • Fast Food",
    fee: 200,
    menu: [
      {
        id: 201,
        name: "Whopper Meal",
        desc: "Burger, fries and coke.",
        price: 1800,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      },
      {
        id: 202,
        name: "Onion Rings",
        desc: "Crispy fried onion rings.",
        price: 600,
        img: "https://images.unsplash.com/photo-1625938144755-652e08e359b7",
      },
    ],
  },
];

let cart = [];
let tempItem = null; // Stores item currently in modal
let currentQty = 1;

// --- INITIALIZATION ---
window.onload = function () {
  renderHome();
};

// --- NAVIGATION LOGIC ---
function goHome() {
  switchView("home-view");
}

function switchView(viewId) {
  document
    .querySelectorAll("main > section")
    .forEach((el) => el.classList.add("hidden"));
  document.getElementById(viewId).classList.remove("hidden");
  window.scrollTo(0, 0);
}

// --- RENDER HOME ---
function renderHome() {
  const grid = document.getElementById("restaurant-grid");
  grid.innerHTML = "";
  restaurants.forEach((res) => {
    grid.innerHTML += `
            <div class="res-card" onclick="openRestaurant(${res.id})">
                <img src="${res.image}">
                <div style="padding: 5px;">
                    <h3>${res.name} <span class="rating-pill">${res.rating}</span></h3>
                    <p class="res-sub">LKR ${res.fee} Delivery Fee • 20-30 min</p>
                </div>
            </div>
        `;
  });
}

// --- RENDER RESTAURANT ---
function openRestaurant(id) {
  const res = restaurants.find((r) => r.id === id);
  document.getElementById("res-banner-img").src = res.image;
  document.getElementById("res-title").innerText = res.name;
  document.getElementById(
    "res-meta"
  ).innerText = `${res.tags} • LKR ${res.fee} Delivery Fee`;

  const menuGrid = document.getElementById("menu-grid");
  menuGrid.innerHTML = "";
  res.menu.forEach((item) => {
    menuGrid.innerHTML += `
            <div class="menu-item" onclick='openFoodModal(${JSON.stringify(
              item
            )})'>
                <div class="menu-text">
                    <div>
                        <h4>${item.name}</h4>
                        <p style="color:#777; font-size:12px; margin-top:5px;">${
                          item.desc
                        }</p>
                    </div>
                    <p>LKR ${item.price}</p>
                </div>
                <img src="${item.img}" class="menu-img">
            </div>
        `;
  });
  switchView("restaurant-view");
}

// --- FOOD DETAILS MODAL ---
function openFoodModal(item) {
  tempItem = item;
  currentQty = 1;
  const modal = document.getElementById("food-modal");
  const infoBox = document.getElementById("modal-food-info");

  infoBox.innerHTML = `
        <img src="${item.img}">
        <h2>${item.name}</h2>
        <p>${item.desc}</p>
    `;
  updateModalPrice();

  modal.style.display = "flex";
}

function closeFoodModal() {
  document.getElementById("food-modal").style.display = "none";
}

function changeQty(change) {
  if (currentQty + change > 0) {
    currentQty += change;
    document.getElementById("modal-qty").innerText = currentQty;
    updateModalPrice();
  }
}

function updateModalPrice() {
  document.getElementById("modal-price-btn").innerText = `LKR ${
    tempItem.price * currentQty
  }`;
}

function confirmAddToOrder() {
  // Check if item already exists
  const existing = cart.find((i) => i.id === tempItem.id);
  if (existing) {
    existing.qty += currentQty;
  } else {
    cart.push({ ...tempItem, qty: currentQty });
  }

  // Update Badge
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  document.getElementById("cart-badge").innerText = count;

  closeFoodModal();
}

// --- CHECKOUT PAGE ---
function showCheckoutPage() {
  if (cart.length === 0) return alert("Your cart is empty!");

  const list = document.getElementById("order-items-list");
  list.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    list.innerHTML += `
            <div class="order-item-row">
                <div>
                    <strong>${item.qty}x</strong> ${item.name}
                </div>
                <div>LKR ${itemTotal}</div>
            </div>
        `;
  });

  const fee = 150; // Flat fee for demo
  document.getElementById("bill-subtotal").innerText = "LKR " + subtotal;
  document.getElementById("bill-fee").innerText = "LKR " + fee;
  document.getElementById("bill-total").innerText = "LKR " + (subtotal + fee);

  switchView("checkout-view");
}

// --- TRACKING SIMULATION ---
function startTracking() {
  cart = []; // Clear cart
  document.getElementById("cart-badge").innerText = "0";
  switchView("tracking-view");
}
