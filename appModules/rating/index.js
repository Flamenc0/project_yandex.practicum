const makeRatingFile = require("./rating-file");
const config = require('./config');
const updateRating = require("./updateRating");
const createRating = require("./calculations");

module.exports = { 
    makeRatingFile,
    updateRating,
    createRating,
    config,
}