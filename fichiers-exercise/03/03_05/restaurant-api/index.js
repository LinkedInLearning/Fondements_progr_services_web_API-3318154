const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const Order = require("./Order");
const appetizers = require("./menu-api/appetizers.json");
const salads = require("./menu-api/salads.json");
const entrees = require("./menu-api/entrees.json");
const desserts = require("./menu-api/desserts.json");
const drinks = require("./menu-api/drinks.json");
const PORT = process.env.PORT || 5000;

const orders = [];
app.use(express.json());
app.use("/menu", router);

const menu = {
  appetizers,
  salads,
  entrees,
  desserts,
  drinks,
};

const pickMenu = (num) => {
  function randomProperties(obj) {
    var result;
    var count = 0;
    for (var prop in obj) if (Math.random() < 1 / ++count) result = prop;
    return result;
  }

  let products = [];

  while (num > 0) {
    const key = randomProperties(menu);
    const category = menu[key];
    const random = Math.floor(Math.random() * category.length);
    const productID = category[random].id;
    const p = category.find((c) => c.id === productID);
    products.push({
      productID: p.id,
      productName: p.name,
      quantity: 1,
      price: p.price,
    });
    num--;
  }

  return products;
};

router.get("/", (_, res) => {
  res.send("Menu API!");
});
router.get("/appetizers", (_, res) => {
  try {
    res.send(appetizers);
  } catch (error) {
    console.log(error);
  }
});

router.get("/entrees", (_, res) => {
  try {
    res.send(entrees);
  } catch (error) {
    console.log(error);
  }
});
router.get("/salads", (_, res) => {
  try {
    res.send(salads);
  } catch (error) {
    console.log(error);
  }
});
router.get("/desserts", (_, res) => {
  try {
    res.send(desserts);
  } catch (error) {
    console.log(error);
  }
});
router.get("/drinks", (_, res) => {
  try {
    res.send(drinks);
  } catch (error) {
    console.log(error);
  }
});
router.post("/order/create", (req, res) => {
  const products = pickMenu(req.body.num);

  try {
    const order = new Order({
      customerName: "Sandra",
      products,
    });

    order.save();
    res.send(order);
  } catch (error) {
    console.log(error);
  }
});
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
  mongoose
    .connect("mongodb://localhost:27017/orders", { useNewUrlParser: true })
    .then(() => console.log("Connected to database!"));
});
