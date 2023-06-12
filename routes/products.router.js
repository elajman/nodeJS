const { Router } = require('express');


const router = Router();
const products=[];

//Product routes
router.get('/api/products',(req,res) => {
    res.send({
        statusCode:200,
        payload: products
 
    });
});
router.post('/api/products',(req, res) =>{
    const limit = req.query.limit;
    
    const product = {
        id: products.length + 1,
        ...req.body
    };
    products.push(product)
    res.send({
        statusCode:200,
        payload:product
    });
});


module.exports = router;