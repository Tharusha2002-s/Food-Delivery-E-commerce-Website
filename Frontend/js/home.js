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
    deliveryTime: "20-30 min",
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
      },
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
    deliveryTime: "25-35 min",
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
  {
    id: 3,
    name: "Pizza Hut",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    tags: "Italian • Pizza",
    fee: 180,
    deliveryTime: "30-40 min",
    menu: [
      {
        id: 301,
        name: "Margherita Pizza",
        desc: "Classic cheese pizza with tomato sauce.",
        price: 2200,
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      },
      {
        id: 302,
        name: "Chicken Supreme",
        desc: "Pizza with chicken, peppers and onions.",
        price: 2800,
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b",
      },
    ],
  },
  {
    id: 4,
    name: "Starbucks",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    tags: "Coffee • Beverages",
    fee: 120,
    deliveryTime: "15-25 min",
    menu: [
      {
        id: 401,
        name: "Caffe Latte",
        desc: "Espresso with steamed milk.",
        price: 650,
        img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      },
      {
        id: 402,
        name: "Blueberry Muffin",
        desc: "Fresh baked blueberry muffin.",
        price: 450,
        img: "https://images.unsplash.com/photo-1587668178277-295251f900ce",
      },
    ],
  },
  {
    id: 5,
    name: "Dominos Pizza",
    image:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    tags: "Italian • Pizza",
    fee: 160,
    deliveryTime: "25-35 min",
    menu: [
      {
        id: 501,
        name: "Pepperoni Pizza",
        desc: "Pizza with pepperoni and cheese.",
        price: 2400,
        img: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9",
      },
      {
        id: 502,
        name: "Garlic Bread",
        desc: "Crispy garlic bread with herbs.",
        price: 800,
        img: "https://images.unsplash.com/photo-1573140401552-3fab0b2e2ffb",
      },
    ],
  },
  {
    id: 6,
    name: "Subway",
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    tags: "American • Sandwiches",
    fee: 140,
    deliveryTime: "20-30 min",
    menu: [
      {
        id: 601,
        name: "Italian BMT",
        desc: "Ham, salami, pepperoni sandwich.",
        price: 1200,
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569",
      },
      {
        id: 602,
        name: "Chicken Teriyaki",
        desc: "Grilled chicken with teriyaki sauce.",
        price: 1300,
        img: "https://images.unsplash.com/photo-1481070414801-51b21d9e8301",
      },
    ],
  },
  {
    id: 7,
    name: "KFC",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.1,
    tags: "American • Fried Chicken",
    fee: 170,
    deliveryTime: "20-30 min",
    menu: [
      {
        id: 701,
        name: "Original Recipe Chicken",
        desc: "Crispy fried chicken with secret recipe.",
        price: 1600,
        img: "https://images.unsplash.com/photo-1544148103-0773bf10d330",
      },
      {
        id: 702,
        name: "Zinger Burger",
        desc: "Spicy chicken burger with mayo.",
        price: 900,
        img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9",
      },
    ],
  },
  {
    id: 8,
    name: "McDonald's",
    image:
      "https://images.unsplash.com/photo-1551782450-17144efb5723?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.0,
    tags: "American • Fast Food",
    fee: 190,
    deliveryTime: "15-25 min",
    menu: [
      {
        id: 801,
        name: "Big Mac Meal",
        desc: "Big Mac burger with fries and drink.",
        price: 1500,
        img: "https://images.unsplash.com/photo-1551782450-17144efb5723",
      },
      {
        id: 802,
        name: "McNuggets",
        desc: "10 piece chicken nuggets.",
        price: 1100,
        img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec",
      },
    ],
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let tempItem = null; // Stores item currently in modal
let currentQty = 1;
let filteredRestaurants = [...restaurants]; // Initialize with all restaurants

// --- UTILITY FUNCTIONS ---
function updateCartBadge() {
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  document.getElementById("cart-badge").innerText = count;
}

function searchRestaurants() {
  const searchTerm = document
    .getElementById("global-search")
    .value.toLowerCase();
  if (searchTerm === "") {
    filteredRestaurants = [...restaurants];
  } else {
    filteredRestaurants = restaurants.filter(
      (res) =>
        res.name.toLowerCase().includes(searchTerm) ||
        res.tags.toLowerCase().includes(searchTerm)
    );
  }
  renderHome();
}

// --- INITIALIZATION ---
window.onload = function () {
  updateAuthUI(); // Update auth UI first
  updateCartBadge(); // Update cart badge on page load
  if (document.getElementById("restaurant-grid")) {
    renderHome();
    // Add search event listener
    const searchInput = document.getElementById("global-search");
    if (searchInput) {
      searchInput.addEventListener("input", searchRestaurants);
    }
  } else if (document.getElementById("menu-grid")) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get("id"));
    if (id) {
      renderRestaurant(id);
    }
  } else if (document.getElementById("order-items-list")) {
    renderCheckout();
  } else if (document.getElementById("tracking-view")) {
    renderTracking();
  }
};

// --- NAVIGATION LOGIC ---
function goHome() {
  window.location.href = "home.html";
}

function openRestaurant(id) {
  window.location.href = "restaurant.html?id=" + id;
}

function showCheckoutPage() {
  window.location.href = "checkout.html";
}

function startTracking() {
  window.location.href = "tracking.html";
}

// --- RENDER HOME ---
function renderHome() {
  const grid = document.getElementById("restaurant-grid");
  grid.innerHTML = "";
  filteredRestaurants.forEach((res) => {
    grid.innerHTML += `
            <div class="res-card" onclick="openRestaurant(${res.id})">
                <img src="${res.image}">
                <div style="padding: 5px;">
                    <h3>${res.name} <span class="rating-pill">${res.rating}</span></h3>
                    <p class="res-sub">LKR ${res.fee} Delivery Fee • ${res.deliveryTime}</p>
                </div>
            </div>
        `;
  });
}

// --- RENDER RESTAURANT ---
function renderRestaurant(id) {
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

  // Save to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update Badge
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  document.getElementById("cart-badge").innerText = count;

  closeFoodModal();
}

// --- RENDER CHECKOUT ---
function renderCheckout() {
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
}

// --- RENDER TRACKING ---
function renderTracking() {
  // Tracking view is static, no dynamic rendering needed
}

// --- TRACKING SIMULATION ---
function startTracking() {
  cart = []; // Clear cart
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-badge").innerText = "0";
  window.location.href = "tracking.html";
}

// --- AUTHENTICATION ---
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

function openAuthModal() {
  document.getElementById("auth-modal").style.display = "flex";
}

function closeAuthModal() {
  document.getElementById("auth-modal").style.display = "none";
}

function switchAuthTab(tab) {
  const loginTab = document.querySelector(
    ".auth-tab[onclick=\"switchAuthTab('login')\"]"
  );
  const signupTab = document.querySelector(
    ".auth-tab[onclick=\"switchAuthTab('signup')\"]"
  );
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (tab === "login") {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
  } else {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  }
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find user
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Login successful!");
    closeAuthModal();
    updateAuthUI();
  } else {
    alert("Invalid email or password");
  }
}

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById(
    "signup-confirm-password"
  ).value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Get existing users
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user already exists
  if (users.find((u) => u.email === email)) {
    alert("User already exists with this email");
    return;
  }

  // Create new user
  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  currentUser = newUser;
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  alert("Account created successfully!");
  closeAuthModal();
  updateAuthUI();
}

function updateAuthUI() {
  const loginBtn = document.querySelector(".login-btn");
  if (currentUser) {
    loginBtn.innerText = `Hi, ${currentUser.name}`;
    loginBtn.onclick = logout;
  } else {
    loginBtn.innerText = "Log in";
    loginBtn.onclick = openAuthModal;
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  updateAuthUI();
  alert("Logged out successfully!");
}
