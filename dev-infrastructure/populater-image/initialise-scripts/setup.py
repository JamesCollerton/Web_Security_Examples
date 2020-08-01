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
    # One read capacity unit represents one 4KB read per second
    # One write capacity unit represents one 1KB write per second
    ProvisionedThroughput={
        'ReadCapacityUnits': 20,
        'WriteCapacityUnits': 20
    }
)

items = [
    {
        "Id": {
            "S": "1" 
        },
        "name": {
            "S": "Item One"
        },
        "description": {
            "S": "This is the first item in the art gallery."
        },
        "image": {
            "S": "https://news.artnet.com/app/news-upload/2019/12/5db820a075ba3.jpg" 
        }
    },
    {
        "Id": {
            "S": "2" 
        },
        "name": {
            "S": "Item Two"
        },
        "description": {
            "S": "This is the second item in the art gallery."
        },
        "image": {
            "S": "https://news.artnet.com/app/news-upload/2019/12/5db820a075ba3.jpg" 
        }
    },
    {
        "Id": {
            "S": "3" 
        },
        "name": {
            "S": "Item Three"
        },
        "description": {
            "S": "This is the third item in the art gallery."
        },
        "image": {
            "S": "https://news.artnet.com/app/news-upload/2019/12/5db820a075ba3.jpg" 
        }
    }
]

for item in items:
    dynamodb.put_item(
        TableName="Products",
        Item= item
    )

# This can be put back in in order to confirm the items have been successfully
# written to DynamoDb

# print(dynamodb.list_tables())
# print(dynamodb.get_item(
#     TableName="Products",
#     Key={
#         "Id": {
#             "S": "1" 
#         }
#     }
# ))