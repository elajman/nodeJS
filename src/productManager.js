const fs = require("fs");

class ProductManager {
  constructor(patch) {
    this.patch = patch;
  }

  async getAllProducts() {
    try {
      const pr = await fs.promises.readFile(this.patch, "utf-8");
      const prParse = JSON.parse(pr);
      if (prParse.length <= 0) {
        return "No existen los productos";
      } else {
        return prParse;
      }
    } catch (error) {
      throw new Error("Error, No se puede leer el Archivo: " + error);
    }
  }

  async getProductById(id) {
    try {
      const pr = await fs.promises.readFile(this.patch, "utf-8");
      const prParse = JSON.parse(pr);
      const product = prParse.find((ele) => ele.id === id);
      if (product) {
        return product;
      } else {
        return "No se encontró ningún producto con el ID";
      }
    } catch (error) {
      throw new Error("Error al leer el archivo: " + error);
    }
  }
}

module.exports = ProductManager;