const fs = require("fs");

class ProductManager {
  constructor(patch) {
    this.patch = patch;
  }

  async getAllProducts() {
    try {
      const prm = await fs.promises.readFile(this.patch, "utf-8");
      const prmParse = JSON.parse(prm);
      if (prmParse.length <= 0) {
        return "No products in Data Base";
      } else {
        return prmParse;
      }
    } catch (error) {
      throw new Error("Error reading file: " + error);
    }
  }

  async getProductById(id) {
    try {
      const prm = await fs.promises.readFile(this.patch, "utf-8");
      const prmParse = JSON.parse(prm);
      const product = prmParse.find((ele) => ele.id === id);
      if (product) {
        return product
      } else {
        return "ID missmatch";
      }
    } catch (error) {
      throw new Error("Error reading file: " + error);
    }
  }
}

module.exports = ProductManager

