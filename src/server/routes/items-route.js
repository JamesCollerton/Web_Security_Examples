import express from 'express'
const router = express.Router();

router.get('/', function(req, res, next) {
    res.set('content-type', 'application/json')
    res.send({
      "message": "Hello, world"
    })
    res.end()
});

export default router