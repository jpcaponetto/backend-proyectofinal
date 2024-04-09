import { productRepository } from "../repositories/index.js";
export default class ProductsService {
  static getAll(queryCriteria, options) {
    return productRepository.dao.getAll(queryCriteria, options);
  }

  static get(filters = {}, options = {}) {
    return productRepository.dao.get((filters = {}), (options = {}));
  }

  static getProduct(id) {
    return productRepository.dao.getProduct(id);
  }

  static create(payload, email) {
    payload.owner = email;
    return productRepository.dao.create(payload);
  }

  static async updateById(id, payload, email, role) {
    if ("owner" in payload) {
      throw new Error("No se permite cambiar de propietario directamente");
    }
    const product = await productRepository.dao.getProduct(id);
    if (role === "admin" || (role === "premium" && product.owner === email)) {
      return productRepository.dao.updateById(id, payload);
    } else {
      throw new Error("No tienes permiso para actualizar este producto.");
    }
  }

  static async deleteById(id, email, role) {
    const product = await productRepository.dao.getProduct(id);
    if (role === "admin" || (role === "premium" && product.owner === email)) {
      return productRepository.dao.deleteById(id);
    } else {
      throw new Error("No tienes permiso para eliminar este producto.");
    }
  }

  static updateStocksById(ids, quantities) {
    return productRepository.dao.updateStocksById(ids, quantities);
  }
}
