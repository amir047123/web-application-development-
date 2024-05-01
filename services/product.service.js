const Product = require("../models/product.models");

exports.createProductService = async (data) => {
  const createdProduct = await Product.create(data);
  return createdProduct;
};

exports.deleteProductService = async (id) => {
  const deletedProduct = await Product.deleteOne({ _id: id });
  return deletedProduct;
};

exports.updateProductService = async (id, data) => {
  const updatedProduct = await Product.updateOne({ _id: id }, data);
  return updatedProduct;
};

exports.getProductByIdService = async (id) => {
  const productById = await Product.findOne({ _id: id });
  return productById;
};