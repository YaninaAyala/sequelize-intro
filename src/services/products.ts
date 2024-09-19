import Product from "../models/products";

class ProductsService {
  static async getAll() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw error;
    }
  }
  static async create(data) {
    try {
      const products = await Product.create(data);
      return products;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, data) {
    try {
      // const {name} = {name:"producto", id:2}
      // console.log(name) ==> "producto"

      // const [user1, user2]= [0,1,2,3,4]
      // console.log(user1) ==> 0
      // console.log(user2) ==> 1

      const [affectedProducts] = await Product.update(data, { where: { id } });
      return affectedProducts;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsService;
