import express from 'express'
import {listProducts,addProduct,removeProduct,singleProduct,updateProduct,getProductsByCategory} from '../controllers/productController.js'
import { uploadColorImages } from "../middleware/cloudinaryUpload.js";
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add', adminAuth, uploadColorImages, addProduct)
productRouter.post('/update', adminAuth, uploadColorImages, updateProduct)
productRouter.post('/remove', adminAuth, removeProduct)
productRouter.post('/single', singleProduct)
productRouter.get('/list', listProducts)
productRouter.get('/category/:category', getProductsByCategory)

export default productRouter