// Handle search form submission
document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
  
    // Get the search query
    const query = document.getElementById("searchInput").value.trim();
  
    // Redirect to the search results page with the query as a parameter
    if (query) {
      window.location.href = `product-list.html?query=${encodeURIComponent(query)}`;
    }
  });