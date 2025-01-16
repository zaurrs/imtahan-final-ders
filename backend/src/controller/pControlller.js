import product from "../model/pModel.js"


export const addProduct = async(req, res)=>{
    try {
        const newProduct = new product(req.body)
        await newProduct.save()
        res.json({newProduct})
    } catch (error) {
        res.send("server")
    }
}
export const getProduct = async(req, res)=>{
    try {
        const products = await product.find()
        res.json({products})
    } catch (error) {
        res.send("server")
    }
}
export const deleteProduct = async(req, res)=>{
    const {id} = req.params
    try {
        const newProduct = await product.findByIdAndDelete(id)
        res.json({newProduct})
    } catch (error) {
        res.send("server")
    }
}