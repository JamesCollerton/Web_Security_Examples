import boto3

dynamo = boto3.client(
            'dynamodb', 
            region_name = 'eu-west-1', 
            aws_access_key_id = 'access_key', 
            aws_secret_access_key = 'secret_key', 
            endpoint_url = 'http://localstack:4569'
        )

dynamo.create_table(
    TableName="Test",
    AttributeDefinitions=[
        {
            'AttributeName': 'TestAttribute',
            'AttributeType': 'S'
        },
    ],
    KeySchema=[
        {
            'AttributeName': 'TestAttribute',
            'KeyType': 'HASH'
        },
    ],
    # TODO: Can probably revise these
    ProvisionedThroughput={
        'ReadCapacityUnits': 123,
        'WriteCapacityUnits': 123
    }
)

print(dynamo.list_tables())