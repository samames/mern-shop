import express from 'express';
const router = express.Router();
import handler from 'express-async-handler';
import Product from '../models/productModel.js';

router.get(
  '/',
  handler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

router.get(
  '/:id',
  handler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
