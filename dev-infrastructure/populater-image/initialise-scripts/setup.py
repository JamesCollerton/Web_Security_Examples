import boto3

dynamodb = boto3.client(
            'dynamodb', 
            region_name = 'eu-west-1', 
            aws_access_key_id = 'access_key', 
            aws_secret_access_key = 'secret_key', 
            endpoint_url = 'http://localstack:4569'
        )

dynamodb.create_table(
    TableName="Products",
    # Only need to define this as it is a key
    AttributeDefinitions=[
        {
            'AttributeName': 'Id',
            'AttributeType': 'S'
        }
    ],
    KeySchema=[
        {
            'AttributeName': 'Id',
            'KeyType': 'HASH'
        },
    ],
    # TODO: Can probably revise these
    ProvisionedThroughput={
        'ReadCapacityUnits': 123,
        'WriteCapacityUnits': 123
    }
)

print(dynamodb.list_tables())