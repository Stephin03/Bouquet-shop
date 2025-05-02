document.addEventListener('DOMContentLoaded', function() {
    // Get all "Add to Cart" buttons
    const buttons = document.querySelectorAll('.add-to-cart');
    
    // Add click event listeners to each button
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Get product details from the button attributes
        const name = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');
        const image = this.getAttribute('data-image');
    
        // Get the existing cart items from localStorage, or initialize an empty array
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        // Add the new item to the cart
        cartItems.push({ name, price, image });
    
        // Store the updated cart items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
        // Show a confirmation alert
        alert('Item added to cart!');
      });
    });
  
    // Display cart items on the cart page
    const cartContainer = document.getElementById('cart-items');
    if (cartContainer) {
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
      if (cartItems.length === 0) {
        cartContainer.innerHTML = "<h3>Your cart is empty!</h3>";
      } else {
        cartItems.forEach(item => {
          // Create a div for each cart item
          const div = document.createElement('div');
          div.classList.add('cart-item');
          div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
          `;
          cartContainer.appendChild(div);
        });
      }
    }
  });
  