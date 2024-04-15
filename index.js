function searchProducts() {
  // Get the value entered in the search bar
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();

  // Loop through each product name and check if it contains the search term
  var productNames = document.querySelectorAll('.ivy-name, .g7-name, .g7iii-name, .r5-name, .r5c-name, .r100-name');
  for (var i = 0; i < productNames.length; i++) {
    var productName = productNames[i].innerText.toLowerCase();

    // Show or hide the product based on whether it matches the search term
    var productDiv = productNames[i].closest('div');
    if (productName.includes(searchTerm)) {
      productDiv.style.display = 'block';
    } else {
      productDiv.style.display = 'none';
    }
  }
}
