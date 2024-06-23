document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: "Product 1", price: "$10", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Product 2", price: "$20", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Product 3", price: "$30", image: "https://via.placeholder.com/150" }
    ];
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
    document.querySelectorAll('.product-item button').forEach(button => {
        button.addEventListener('click', function() {
            alert('Product added to cart!');
        });
    });
});
