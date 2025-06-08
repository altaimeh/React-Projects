export const getAllProducts =  async (req, res) => {
  // GET ALL PRODUCTS
  res.status(200).json({ message: "Get all products" });
}

export const createProduct = async (req, res) => {
  // CREATE A PRODUCT
  res.status(201).json({ message: "Product created successfully" });
}