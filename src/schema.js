import { makeExecutableSchema } from "graphql-tools";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";

const { ObjectId } = mongoose.Types;

ObjectId.prototype.valueOf = function() {
  return this.toString();
};

const typeDefs = `
    type Product {
    _id : ID
    name: String!
    qty: Int
    }

    type Query {
        allProducts: [Product]
        getProduct(_id: ID): Product
    }

    input ProductInput {
        name: String!
        qty: Int
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(_id: ID!, input: ProductInput): Product
        removeProduct(_id: ID!): Product
    }

 
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
