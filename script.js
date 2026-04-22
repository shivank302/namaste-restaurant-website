const menuGrid = document.getElementById('menuGrid');
const favouritesPanel = document.getElementById('favouritesPanel');
const cartPanel = document.getElementById('cartPanel');
const favouritesList = document.getElementById('favouritesList');
const cartList = document.getElementById('cartList');

const menuItems = [
  { 
    name: "Paneer Butter Masala", 
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2-500x500.jpg", 
    desc: "Creamy spiced curry with soft paneer cubes cooked in rich tomato gravy." 
  },
  { 
    name: "Chicken Biryani", 
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg", 
    desc: "Aromatic basmati rice cooked with tender chicken and traditional Indian spices." 
  },
  { 
    name: "Masala Dosa", 
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg", 
    desc: "Crispy golden dosa filled with spiced mashed potatoes, served with chutneys." 
  },
  { 
    name: "Gulab Jamun", 
    img: "https://static1.squarespace.com/static/62df38bd768870226dced4a0/62ecd969d0402a7f85047496/631ccf8748aa0a5ade64631e/1666108546275/gulabjamun-417.png?format=2500w", 
    desc: "Soft milk-solid balls soaked in rose-flavored sugar syrup, served warm." 
  }
];

menuItems.forEach(item => {
  const div = document.createElement('div');
  div.classList.add('menu-item');
  div.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.desc}</p>
    <button onclick="addToFavourites('${item.name}')">❤️ Favourite</button>
    <button onclick="addToCart('${item.name}')">🛒 Add to Cart</button>
  `;
  menuGrid.appendChild(div);
});

let favourites = [];
let cart = [];

function addToFavourites(name) {
  if (!favourites.includes(name)) favourites.push(name);
  updatePanel(favouritesList, favourites);
  favouritesPanel.classList.add('active');
}

function addToCart(name) {
  if (!cart.includes(name)) cart.push(name);
  updatePanel(cartList, cart);
  cartPanel.classList.add('active');
}

function updatePanel(listElement, items) {
  listElement.innerHTML = items.map(i => `<li>${i}</li>`).join('');
}
