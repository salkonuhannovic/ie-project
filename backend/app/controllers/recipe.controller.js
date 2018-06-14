const Recipe = require('../models/recipe.model.js');

// Create and Save a new recipe
exports.create = (req, res) => {
    // Validate request
    if (!req.body.author) {
        return res.status(400).send({
            message: "Author can not be empty"
        });
    }

    // Create a recipe
    const recipe = new Recipe({
        title: req.body.title,
        description: req.body.description,
        thumbnail: req.body.thumbnail,
        description: req.body.description,
        instructions: req.body.instructions,
        author: req.body.author,
        totalLikes: req.body.totalLikes,
        ingredients: req.body.ingredients
    });

    // Save in the database
    recipe.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the recipe."
            });
        });
};

// Retrieve and return all recipe from the database.
exports.findAll = (req, res) => {
    Recipe.find()
        .then(recipes => {
            res.send(recipes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving recipes."
            });
        });
};

// Retrieve and return all recipe from the database.
exports.best5 = (req, res) => {
    Recipe.find()
        .sort('-totalLikes')
        .limit(5)
        .then(recipes => {
            res.send(recipes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving recipes."
            });
        });
};

// Find a single recipe with a recipeID
exports.findOne = (req, res) => {
    Recipe.findById(req.params.recipeId)
        .then(recipe => {
            if (!recipe) {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.recipeId
                });
            }
            res.send(recipe);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.recipeId
                });
            }
            return res.status(500).send({
                message: "Error retrieving recipe with id " + req.params.recipeId
            });
        });
};

// Update a recipe identified by the recipeID in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.author) {
        return res.status(400).send({
            message: "Author can not be empty"
        });
    }

    // Find recipe and update it with the request body
    Recipe.findByIdAndUpdate(req.params.recipeId, {
        title: req.body.title,
        description: req.body.description,
        thumbnail: req.body.thumbnail,
        description: req.body.description,
        instructions: req.body.instructions,
        author: req.body.author,
        totalLikes: req.body.totalLikes,
        ingredients: req.body.ingredients
    }, { new: true })
        .then(recipe => {
            if (!recipe) {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.recipeId
                });
            }
            res.send(recipe);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.recipeId
                });
            }
            return res.status(500).send({
                message: "Error updating recipe with id " + req.params.recipeId
            });
        });
};
