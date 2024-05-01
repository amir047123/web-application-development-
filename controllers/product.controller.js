const Product = require("../models/product.models");
const {
  createProductService,
  deleteProductService,
  updateProductService,
  getProductByIdService,
} = require("../services/product.service");

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await createProductService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: newProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get Products
exports.getProducts = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    const products = await Product.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);

    const total = await Product.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });

    res.status(200).json({
      status: "success",
      data: products,
      total: total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await deleteProductService(id);

    res.status(200).json({
      status: "success",
      data: deletedProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await updateProductService(id, req.body);

    if (updatedProduct.nModified === 0) {
      return res.status(400).json({
        status: "fail",
        message: "Couldn't update. Product not found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get Product by ID
exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const productById = await getProductByIdService(id);

    res.status(200).json({
      status: "success",
      data: productById,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

// Get Specific Products
exports.getSpecificProducts = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;
  const fieldName2 = req.query?.fieldName2;
  const fieldValue2 = req.query?.fieldValue2;
  const fieldName3 = req.query?.fieldName3;
  const fieldValue3 = req.query?.fieldValue3;

  try {
    const products = await Product.find({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    })
      .skip(page * size)
      .limit(size);

    const total = await Product.countDocuments({
      $and: [
        { [fieldName]: { $eq: fieldValue } },
        { [fieldName2]: { $eq: fieldValue2 } },
        { [fieldName3]: { $eq: fieldValue3 } },
      ],
    });

    res.status(200).json({
      status: "success",
      data: products,
      total: total,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};