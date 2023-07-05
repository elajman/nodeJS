const { Router } = require ('express')
const router = Router();
const products = []

router.get('/',(req,res)=>{
    
    products.create({
        name:'MTB',
        brand:'Specialized',
        price : 5200
})

.then(products =>{
    res.send({message:'product created', products})
})
.catch(err =>{
    res.status(500).send(err)
})
});
router.post('/api/products',(req,res)=>{
    const product= {
        id: user.length + 1,
        ...req.body 
    } ;
    product.push(products)
res.send({
    statusCode:200,
    render:product
})
})
module.exports = router
