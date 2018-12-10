import Product from "./models/product";

export const resolvers = {
  Query: {
    async allProducts() {
      return await Product.find();
    },
    async getProduct(_, args) {
      return await Product.findById(args._id);
    }
  },

  Mutation: {
    async createProduct(_, { input }) {
      return await Product.create(input);
    },
    async updateProduct(_, { _id, input }) {
      return await Product.findOneAndUpdate({ _id }, input, { new: true });
    },
    async removeProduct(_, { _id }) {
      return await Product.findByIdAndRemove(_id);
    }
  }
};
