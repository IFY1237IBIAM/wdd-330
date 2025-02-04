// Extract the search query from the URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("query");

if (query) {
  // Display the query on the page (optional)
  document.title = `Search Results for "${query}"`;

  // Fetch search results from the API
  fetch(`https://fakestoreapi.com/products?search=${encodeURIComponent(query)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      return response.json();
    })
    .then((data) => {
      const productList = document.getElementById("productList");

      if (data && data.length > 0) {
        // Render the products
        data.forEach((product) => {
          const productItem = document.createElement("div");
          productItem.classList.add("product-item");

          productItem.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}" />
            <p>Price: $${product.price.toFixed(2)}</p>
            <a href="product-detail.html?id=${product.id}">View Details</a>
          `;

          productList.appendChild(productItem);
        });
      } else {
        productList.innerHTML = `<p>No results found for "${query}".</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching search results:", error);
      document.getElementById("productList").innerHTML =
        "<p>Something went wrong. Please try again later.</p>";
    });
} else {
  document.getElementById("productList").innerHTML =
    "<p>No search query provided.</p>";
}
