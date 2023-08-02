import { Product } from '../models/product.js';

const getProducts = (req, res, next) => {
  Product.find()
    .then((products) => res.status(200).json({ products }))
    .catch((error) => res.status(400).json({ error }));
};

const getOneProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.status(200).json({ product }))
    .catch((error) => res.status(404).json({ error }));
};

const createProduct = (req, res, next) => {
  const product = new Product({
    ...req.body,
  });
  product
    .save()
    .then((product) => res.status(201).json({ product }))
    .catch((error) => res.status(400).json({ error }));
};

const updateProduct = (req, res, next) => {
  Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Modified!' }))
    .catch((error) => res.status(400).json({ error }));
};

const deleteProduct = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ Message: 'Deleted!' }))
    .catch((error) => res.status(400).json({ error }));
};

export {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
