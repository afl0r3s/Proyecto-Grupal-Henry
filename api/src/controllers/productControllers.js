const Product = require('../models/Product');
const Category = require('../models/Category');

async function getProducts(req, res, next) {
    const {name} = req.query;
    try {
        const products = await Product.find();
        if(!name){
            return res.json(products);
        }else{
            const productsByName = products.filter( product => product.name.toLowerCase().includes(name.toLowerCase()));
            return res.json(productsByName);
        }
    } catch (error) {
        next(error);
    }
}

async function getProductById(req, res, next) {
  const { id } = req.params;
  try {
    if (id) {
      const detail = await Product.findById(id);
      return res.json(detail);
    }
  } catch (error) {
    next(error);
  }
}

async function createProducts(req, res, next) {
    const {name, price, description, image_url, categories} = req.body;
    try {
        const product = new Product({name, price, description, image_url, categories});
        await product.save();
        return res.status(200).send('Product successfully created');
        // if (!req.body.length) {
        //     return res.send('Add product');
        // } else {
        //     const products = req.body;
        //     console.log("Products: ", products)
        //     products.forEach(
        //         async ({
        //             image_url,
        //             name,
        //             description,
        //             price,
        //             categories }) => {
        //             const [product] = await Product.findOrCreate({
        //                 where: {
        //                     name,
        //                 },
        //                 defaults: { image_url, description, price },
        //             });
        //             categories.forEach(async ({ name }) => {
        //                 const [category] = await Category.findOrCreate({
        //                     where: { name },
        //                 });
        //                 product.addCategory(category);
        //             });
        //         }
        //     );
        //     if (products.length > 1) {
        //         const productsNames = products.map((elem) => elem.name);
        //         return res.json(`Los productos ${productsNames} han sido creados exitosamente.`);
        //     }
        //     if (products.length === 1) {
        //         const productName = products.map((elem) => elem.name);
        //         return res.json(`El producto ${productName} ha sido creado exitosamente.`);
        //     }
        // }
    } catch (error) {
        next(error);
        return res.send('Product is not create ERROR');
    }
}

async function updateProductById(req, res, next) {
    const {id} = req.params;
    const {name, image_url, price, description, categories} = req.body;
    try {
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).send("The product doesn't exist")
        }else{
            await Product.updateOne({_id: id}, {name, image_url, price, description, categories})
            return res.status(200).send("Product successfully updated");
        }
        // let { id } = req.params;
        // id = parseInt(id)
        // const { image_url, name, description, price, categories } = req.body;

        // await Category.destroy({
        //     where: {
        //         productId: id
        //     }
        // });

        // const product = await Product.findByPk(parseInt(id));

        // await product.update({ image_url, name, description, price });

        // categories.forEach(async ({ name }) => {
        //     const [category] = await Category.findOrCreate({
        //         where: {name}
        //     });
        //     await product.addCategory(category);
        // });

        // return res.send(`Producto ${name} actualizado ${id}`);
    } catch (error) {
        next(error);
        return res.send(`Product not update`);
        
    }
}

async function deleteProduct(req, res, next) {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if(product){
            await Product.deleteOne({_id: id});
            return res.status(200).send("Product successfully deleted");
        }else{
            return res.status(404).send("Product not found");
        }
        // const product = await Product.findByPk(id);
        // await product.destroy();
        // console.log(`Deleted ${product.name} ID:${id}`)
        // return res.send(`Deleted ${product.name} ID:${id}`)
    } catch (error) {
        next(error)
        return res.send('Product not found');
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProducts,
    updateProductById,
    deleteProduct
};
