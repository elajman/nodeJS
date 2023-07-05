const { Router } = require ('express')
const router = Router()
const carts = []
router.get('api/cart',(req,res)=>{
    res.send({
        statusCode: 200,
        render: carts
    });
});

module.exports = router
