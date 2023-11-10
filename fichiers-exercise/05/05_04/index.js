const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const bookRoutes = require("./routes");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema.js");
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

// GraphQL UI
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
  mongoose
  .connect(`mongodb+srv://sandy:${process.env.PASSWORD}@cluster0.4ihtptd.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .then(() => console.log("Connected to database!"));
});
