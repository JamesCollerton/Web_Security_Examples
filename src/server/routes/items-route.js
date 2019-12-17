import express from 'express'
import AWS from 'aws-sdk'

const router = express.Router();

router.get('/', function(req, res, next) {
    AWS.config.update(
      {
        region: 'local',
        endpoint: 'http://localhost:4569'
      }
    )

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
      TableName: "Products"
    };

    res.set('content-type', 'application/json')

    docClient.scan(params, function(err, data) {
      if (err) {
        res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else {
        const { Items } = data;
        res.send({
          success: true,
          message: 'Loaded fruits',
          products: Items
        });
      }
    });
    // res.set('content-type', 'application/json')
    // res.send({
    //   "message": "Hello, world"
    // })
    // res.end()
});

export default router