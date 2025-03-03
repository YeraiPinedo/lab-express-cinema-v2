// User model development

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showTimes: Array
}, {
    timestamps: true

})


const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie