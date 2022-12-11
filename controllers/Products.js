const Product = require('./../models/productModel')


const createProduct = async(req,res,next)=>{

}

const getProducts = async(req,res,next)=>{
    res.send('<h1> all products will be there </h1>')
}

module.exports ={
    createProduct,
    getProducts
}