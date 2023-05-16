const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.products = [];
    this.lastId = 0;
    this.loadFromFile();
  }

  addProduct(product) {
    // valido campos
    if (!product.code || !product.name || !product.price) {
      console.log('Product code, name, and price are required.');
      return;
    }

    // chequeo si existe el ID
    const existingProduct = this.products.find(p => p.code === product.code);
    if (existingProduct) {
      console.log(`Product with code ${product.code} already exists.`);
      return;
    }

    // creo nuevo producto y autoincremento
    const newProduct = { id: ++this.lastId, ...product };
    this.products.push(newProduct);
    console.log(`Product with code ${product.code} has been added with ID ${newProduct.id}.`);

    this.saveToFile();
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      console.log(`Product with ID ${id} not found.`);
      return;
    }
    return product;
  }

  updateProduct(id, updatedProduct) {
    const productIndex = this.products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      console.log(`Product with ID ${id} not found.`);
      return;
    }

    // guardo el ID y actualido otros campos
    this.products[productIndex] = { ...this.products[productIndex], ...updatedProduct };
    console.log(`Product with ID ${id} has been updated.`);

    this.saveToFile();
  }

  deleteProduct(id) {
    const productIndex = this.products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      console.log(`Product with ID ${id} not found.`);
      return;
    }

    this.products.splice(productIndex, 1);
    console.log(`Product with ID ${id} has been deleted.`);

    this.saveToFile();
  }

  loadFromFile() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      this.products = JSON.parse(data);
      this.lastId = this.calculateLastId();
      console.log('Product data loaded from file.');
    } catch (err) {
      console.log('Error loading product data from file.');
    }
  }

  saveToFile() {
    try {
      const data = JSON.stringify(this.products);
      fs.writeFileSync(this.filePath, data);
      console.log('Product data saved to file.');
    } catch (err) {
      console.log('Error saving product data to file.');
    }
  }

  calculateLastId() {
    let maxId = 0;
    for (const product of this.products) {
      if (product.id > maxId) {
        maxId = product.id;
      }
    }
    return maxId;
  }
}

  
const manager = new ProductManager();

// Agregar productos
manager.addProduct('Bicicleta', 'MTB', 2500, 'bici.jpg', '001', 10);
manager.addProduct('Bicicleta', 'MTB', 3900, 'biciMtb.jpg', '002', 5);
manager.addProduct('Bicicleta', 'ruta', 5900, 'bici-ruta.jpg', '003', 8);

// Obtener todos los productos
console.log(manager.getProducts());

// Obtener un producto por id
<<<<<<< HEAD
console.log(manager.getProductById(1)); // { id: 1, title: 'Bicicleta', description: 'MTB', price: 2500, thumbnail: 'bici.jpg', code: '001', stock: 10 }
=======
console.log(manager.getProductById(1)); // { id: 1, title: 'Bicicleta', description: 'MTB', price: 2500, thumbnail: 'bike.jpg', code: '001', stock: 10 }
>>>>>>> 4e6ee8a4cf0eeab9a049be075c01c25341f3a048
console.log(manager.getProductById(4)); // No encontrado

  

  
