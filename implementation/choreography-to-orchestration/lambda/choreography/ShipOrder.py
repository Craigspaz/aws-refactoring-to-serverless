import boto3
from botocore.config import Config
import json
import os
import uuid

TABLE_NAME = os.environ['table_name']
SNS_TOPIC_ARN = os.environ['sns_topic_arn']
config = Config(connect_timeout=5, read_timeout=5, retries={'max_attempts': 1})
dynamodb = boto3.client('dynamodb', config=config)
sns = boto3.client('sns')

def lambda_handler(event, context):
    request = json.loads(event['Records'][0]['Sns']['Message'])
    
    data = dynamodb.get_item(
    TableName=TABLE_NAME,
    Key={
        'product_id': {
          'S': str(request['product_id'])
        }
    },
    ProjectionExpression = "Payment_processed")
       
    payment_processed = json.dumps(data['Item']['Payment_processed'] ['BOOL'])
        
    if(payment_processed):
        dynamodb_response = dynamodb.put_item(
        TableName = TABLE_NAME, 
        Item = {
            'product_id': {'S': str(request['product_id'])},
            'Payment_processed' : {'BOOL': True},
            'Ship_order' : {'BOOL': True}
        });
    
        sns_response = sns.publish(TopicArn=SNS_TOPIC_ARN, MessageStructure= "json", Message=json.dumps({"default": json.dumps({"product_id" : request['product_id']})})) 
        print('sns_response:', sns_response)
    else:
        print(' Error: Payment processing error')
        
    return
     