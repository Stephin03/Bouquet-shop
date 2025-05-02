document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.getElementById('cart-items');
    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<h3>Your cart is empty!</h3>";
    } else {
        cartItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(div);
        });

        // Add event listener to remove buttons
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                cartItems.splice(index, 1); // Remove the item from the array
                localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update localStorage
                location.reload(); // Reload the page to reflect changes
            });
        });
    }
});
