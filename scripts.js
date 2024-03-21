function loadRandomCategory() {
    var categories = ['L', 'D', 'Sushi', 'Drinks', 'Desserts'];
    var randomIndex = Math.floor(Math.random() * categories.length);
    var randomCategoryShortName = categories[randomIndex];
    $dc.loadMenuItems(randomCategoryShortName);
}