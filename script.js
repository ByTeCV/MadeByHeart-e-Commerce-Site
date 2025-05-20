document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.collage-container img');
    images.forEach(img => {
        img.style.opacity = 1;
        img.style.transform += ' scale(1.08)';
        img.style.transition = 'opacity 0.7s, transform 0.7s';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = new Map();

    function showCart() {
        const cart = document.getElementById('cart');
        if (cart && !cart.classList.contains('active')) {
            cart.classList.add('active');
            cart.style.display = 'flex'; // Ensure display is set to flex
        }
    }

    function addToCart(price) {
        if (cartItems.has(price)) {
            cartItems.set(price, cartItems.get(price) + 1);
        } else {
            cartItems.set(price, 1);
        }
        updateCart();
        showCart(); // Show cart when an item is added
    }

    function updateCart() {
        const totalSpan = document.getElementById("cart-total");
        const itemCountSpan = document.getElementById("cart-item-count");
        let total = 0;
        let itemCount = 0;

        cartItems.forEach((quantity, price) => {
            total += price * quantity; // Calculate the total price
            itemCount += quantity; // Calculate the total number of items
        });

        totalSpan.textContent = total; // Update the total price in the cart
        itemCountSpan.textContent = itemCount; // Update the total item count in the cart
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(price);
        });
    });
});

document.getElementById('view-cart-button').addEventListener('click', () => {
    alert('Cart functionality is under development!');
});