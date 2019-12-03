import boto3

dynamo = boto3.client(
            'dynamodb', 
            region_name = 'eu-west-1', 
            aws_access_key_id = 'access_key', 
            aws_secret_access_key = 'secret_key', 
            endpoint_url = 'http://localhost:4569'
        )

dynamo.list_tables()