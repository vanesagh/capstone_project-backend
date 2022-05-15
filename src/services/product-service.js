const {ProductModel} = require('../models/product');


const createProduct = async (product) =>{
    const newProduct = new ProductModel(product);
    await newProduct.save();
    return newProduct;

};

const getProducts = async () =>{
    const products = await ProductModel.find().lean().exec();
    return products;

};

const getProduct = async (id) => {
    const product = await ProductModel.findById(id).lean().exec();
    return product;
};

const deleteProduct = async (id) => {
    await ProductModel.findByIdAndDelete(id).exec();
}

const updateProduct = async (id, product) => {
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, product, {
        returnDocument: "after"
    }).lean().exec();

    return updatedProduct;
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
};