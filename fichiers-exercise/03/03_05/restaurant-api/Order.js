const mongoose = require("mongoose");

// Define the order schema
const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  orderDate: { type: Date, default: new Date().toISOString().slice(0, 10) },
  products: [
    {
      productID: { type: String, required: true },
      productName: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
});

// Create the Order model using the schema
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
