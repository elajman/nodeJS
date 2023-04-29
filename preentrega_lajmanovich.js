class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        throw new Error('Todos los campos son requeridos');
      }
  
      if (this.products.some((product) => product.code === code)) {
        throw new Error('El codigo ya existe');
      }
  
      const product = {
        id: this.nextId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(product);
      this.nextId++;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        return product;
      } else {
        console.error('No encontrado');
      }
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
console.log(manager.getProductById(1)); // { id: 1, title: 'Camiseta', description: 'Camiseta de algodón', price: 25.99, thumbnail: 'camiseta.jpg', code: '001', stock: 10 }
console.log(manager.getProductById(4)); // No encontrado

  

  