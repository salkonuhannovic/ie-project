module.exports = (app) => {
    const recipes = require('../controllers/recipe.controller');

    // Create a new recipe
    app.post('/recipes', recipes.create);

    // Retrieve all recipes
    app.get('/recipes', recipes.findAll);

    // Retrieve 5 best rated recipes
    app.get('/recipes/top5', recipes.best5);

    // Retrieve a single recipe with recipeID
    app.get('/recipes/:recipeId', recipes.findOne);

    // Update a recipe with recipeID
    app.put('/recipes/:recipeId', recipes.update);

    app.patch("/recipes/:recipeId/like", recipes.like) ;
    app.patch("/recipes/:recipeId/dislike", recipes.dislike);
}