import nc from 'next-connect'
import db from '../../../Helper/initDB'
import Product from '../../../Models/product'

const handler = nc();

handler.get( async (req,res)=>{
    await db.connect();
    const products = await Product.find({});
    await db.disconnect();
    res.send(products);
})

export default handler;