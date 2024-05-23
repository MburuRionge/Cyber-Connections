// Hard-coded credentials (For demonstration purposes only)
const validUsername = "user";
const validPassword = "password";

function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        // Redirect to another page or perform another action
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
}


const products = [
    { id: 1, Service: " Network Security", price: 10.0, location: "New York", rating: 4.5, tools = {"firewalls", "Intrusion Detection Systems (IDS)", "Intrusion Prevention Systems (IPS)", "Unified Threat Management (UTM)"}},
    { id: 2, Service: "Endpoint Security", price: 25.0, location: "San Francisco", rating: 4.0, tools =  {"Antivirus/Antimalware", "Endpoint Detection and Response (EDR)", "Mobile Device Management (MDM)", "Application Control"}},
    { id: 3, Service: "Application Security", price: 15.0, location: "Los Angeles", rating: 4.2, tools="Web Application Firewalls (WAF)", "Runtime Application Self-Protection (RASP)", "Static Application Security Testing (SAST)", "Dynamic Application Security Testing (DAST)", "Interactive Application Security Testing (IAST)"} },
    { id: 4, Service: "Identity and Access Management (IAM)", price: 20.0, location: "Chicago", rating: 3.8 },
    { id: 5, Service: "Data Security", price: 10.5, location: "New York", rating: 4.1 },
    { id: 6, Service: "Security Information and Event Management (SIEM)", price: 14.0, location: "New York", rating: 4.1 },
    { id: 7, Service: "Threat Intelligence", price: 7.0, location: "New York", rating: 4.1 },
    { id: 8, Service: "Governance, Risk, and Compliance (GRC)", price: , location: "New York", rating: 4.1 },
    { id: 9, Service: " Managed Security Services (MSS)", price: 60, location: "New York", rating: 4.1 },
    { id: 10, Service: "Training and Awareness", price: 60, location: "New York", rating: 4.1 },
    { id: 11, Service: "Advanced Threat Protection", price: 60, location: "New York", rating: 4.1 },
    { id: 12, Service: "Backup and Recovery", price: 60, location: "New York", rating: 4.1 },

    // Add more products as needed
];

function displayProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <p>Location: ${product.location}</p>
            <p>Rating: ${product.rating} stars</p>
        `;
        productList.appendChild(productDiv);
    });
}

function filterProducts() {
    const search = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('category').value;
    const priceMin = document.getElementById('price-min').value;
    const priceMax = document.getElementById('price-max').value;
    const location = document.getElementById('location').value.toLowerCase();
    const rating = document.getElementById('rating').value;

    const filteredProducts = products.filter(product => {
        return (
            (search === '' || product.name.toLowerCase().includes(search)) &&
            (category === '' || product.category === category) &&
            (priceMin === '' || product.price >= parseFloat(priceMin)) &&
            (priceMax === '' || product.price <= parseFloat(priceMax)) &&
            (location === '' || product.location.toLowerCase().includes(location)) &&
            (rating === '' || product.rating >= parseFloat(rating))
        );
    });

    displayProducts(filteredProducts);
}

// Initial display of products
displayProducts(products);
