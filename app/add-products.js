document.querySelector('#add-product-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to demonstrate validation

    let isValid = true;
    
    const title = document.querySelector('#product-title').value;
    const price = document.querySelector('#product-price').value;
    const quantity = document.querySelector('#product-quantity').value;

    // Simple validation checks
    if (title === '') {
        alert('Title is required');
        isValid = false;
    }
    
    if (isNaN(price) || price <= 0) {
        alert('Price must be a valid number greater than 0');
        isValid = false;
    }
    
    if (isNaN(quantity) || quantity <= 0) {
        alert('Quantity must be a valid number greater than 0');
        isValid = false;
    }

    if (isValid) {
        // You can submit the form or process the data here
        alert('Product added successfully');
    }
});