const { Router } = require('express')


const router = Router();
const carts = [];
//cart routes
router.get('/api/carts',(req, res) => {
    res.send({
        statusCode:200,
        payload: carts
 
    });
});
router.post('/api/carts',(req, res) => {
    
    const cart = {
        id: carts.length + 1,
        ...req.body
    };
    carts.push(cart)
    res.send({
        statusCode:200,
        payload:cart
    });
});
module.exports = router;
