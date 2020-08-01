import express from 'express'
import AWS from 'aws-sdk'
import awsConfig from '../config/aws-config'
import dataConfig from '../config/data-config'

const router = express.Router();

AWS.config.update(awsConfig.localConfig)

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: dataConfig.tableName
};

router.get('/', function(req, res, next) {

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
          message: 'Loaded products',
          items: Items
        });
      }
    });

});

export default router