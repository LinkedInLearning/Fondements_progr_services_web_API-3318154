const graphql = require("graphql");
const Book = require("./Book");

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    description: { type: GraphQLString },
    isbn: { type: GraphQLString },
    language: { type: GraphQLString },
    category: { type: GraphQLString },
    available: { type: GraphQLBoolean },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({});
      },
    },
    booksByCategory: {
      type: new GraphQLList(BookType),
      args: { category: { type: GraphQLString } },
      resolve(parent, args) {
        return Book.find({ category: args.category });
      },
    },
    bookByIsbn: {
      type: new GraphQLList(BookType),
      args: { isbn: { type: GraphQLString } },
      resolve(parent, args) {
        return Book.find({ isbn: args.isbn });
      },
    }
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    toggleAvailableStatus: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Book.findById(args.id).then((book) => {
          if (!book) {
            throw new Error("Book not found");
          }
          book.available = !book.available;
          return book.save();
        });
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = schema;
