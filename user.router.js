const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
    res.send('cust router...')
});


module.exports.UserRouter = router
