const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
