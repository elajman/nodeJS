const fs = require('fs');

class productManager {
  constructor(path) {
    this.path = path;
  }

  async getAllProducts() {
    let pr = await fs.promises.readFile(this.path, 'utf-8');
    let prParse = JSON.parse(pr);

    if (prParse.length <= 0) {
      console.log('No existe el Producto');
    } else {
      console.log(prParse);
    }
  }

  async deleteProducto(id) {
    let pr = await fs.promises.readFile(this.path, 'utf-8');
    let prParse = JSON.parse(pr);

    const arrayNew = prParse.filter((ele) => {
      return ele.id !== id;
    });

    await fs.promises.writeFile(this.path, JSON.stringify(arrayNew, null, 2), 'utf-8');
    console.log('Producto Eliminado');
  }

  async updateProduct(id, infoNew) {
    let pr = await fs.promises.readFile(this.path, 'utf-8');
    let prParse = JSON.parse(pr);

    let arrayUpdate = prParse.map((ele) => {
      if (ele.id === id) {
        return { ...ele, title: infoNew.title, price: infoNew.price };
      } else {
        return ele;
      }
    });

    console.log(arrayUpdate);
    await fs.promises.writeFile(this.path, JSON.stringify(arrayUpdate, null, 2), 'utf-8');
    console.log('Producto Actualizado!');
  }

  async addProduct(info) {
    let pr = await fs.promises.readFile(this.path, 'utf-8');
    let prParse = JSON.parse(pr);

    const newId = generateUniqueId();

    const newProduct = {
      id: newId,
      title: info.title,
      price: info.price,
    };

    prParse.push(newProduct);

    await fs.promises.writeFile(this.path, JSON.stringify(prParse, null, 2), 'utf-8');

    console.log('Producto Agregado!');
  }
}

let newPr = new productManager('./productos.json');

newPr.updateProduct('scott.mtb.303030', { price: 3999, title: 'titulo modificado' });
newPr.addProduct({ title: 'New Product', price: 999 });
newPr.getAllProducts();

function generateUniqueId() {
  return Date.now().toString();
}
