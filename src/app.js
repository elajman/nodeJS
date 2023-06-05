const express = require('express');
const app = express();
const ProductManager = require('./productManager');

const productManager = new ProductManager('./productos.json');
const PORT = 8080


app.get('/products', async (req, res) => {
  try {
    const products = await productManager.getAllProducts();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error, no se pueden obtener los productos');
  }
});


app.get('/products/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productManager.getProductById(productId);
    if (typeof product === 'string') {
      res.status(404).send(product);
    } else {
      res.json(product);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error al obtener el producto con ID: ${productId}`);
  }
});


app.listen(PORT, () => {
  console.log('Server running in port 8080');
});