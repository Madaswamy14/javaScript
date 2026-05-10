// script.js

// 1. Select all checkboxes and product items
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const products = document.querySelectorAll('.collections__item');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', filterProducts);
});

function filterProducts() {
    const activeFilters = Array.from(checkboxes)
        .filter(i => i.checked)
        .map(i => i.value.toLowerCase()); // Ensure case consistency

    products.forEach(product => {
        const category = product.getAttribute('data-category').toLowerCase();
        const type = product.getAttribute('data-type').toLowerCase();
        const price = product.getAttribute('data-price').toLowerCase();

        // NEW: Get the color string and turn it into an array
        const colorAttr = product.getAttribute('data-color') || "";
        const productColors = colorAttr.toLowerCase().split(' ');

        // Check if no filters are selected
        if (activeFilters.length === 0) {
            product.style.display = 'flex';
            return;
        }

        // Check if the product matches category, type, or price
        const matchesStandard = activeFilters.includes(category) ||
            activeFilters.includes(type) ||
            activeFilters.includes(price);

        // NEW: Check if any active color filter is present in the product's color array
        const matchesColor = activeFilters.some(filter => productColors.includes(filter));

        if (matchesStandard || matchesColor) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}


// 2. Select the search input
const searchInput = document.getElementById('product-search');

// 3. Add event listener for real-time search
searchInput.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase(); // Get the search term and normalize case

    products.forEach(product => {
        // Targeted search within the details section (Title and Description)
        const content = product.querySelector('.collections__item__details').textContent.toLowerCase();

        // Toggle visibility based on whether the content includes the search term
        if (content.includes(term)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
});