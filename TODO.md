# TODO: Convert SPA to Multi-Page Application for Uber Eats Sri Lanka Clone

## Tasks

- [x] Modify home.html to only contain home-view section, remove restaurant-view, checkout-view, tracking-view
- [x] Create restaurant.html with restaurant-view section
- [x] Create checkout.html with checkout-view section
- [x] Create tracking.html with tracking-view section
- [x] Update home.js navigation functions to use page redirects instead of view switching
- [x] Add URL parameter handling in JS for restaurant page (e.g., ?id=1)
- [x] Ensure all new pages link to ../css/home.css and ../js/home.js
- [x] Test navigation between pages
- [x] Implement cart persistence across pages using localStorage if needed
- [x] Update delivery time display to use dynamic data from restaurant objects instead of hardcoded "20-30 min"
- [x] Implement search functionality for restaurants (search by name and tags)
- [x] Add filteredRestaurants variable and update renderHome to use filtered results
- [x] Add event listener for search input in initialization
- [x] Implement login/signup functionality with modal, form validation, and localStorage persistence
