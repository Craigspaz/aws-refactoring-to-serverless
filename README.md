# Refactoring to Serverless
A controlled technique for improving the design of serverless applications by replacing application code with equivalent automation code.


## About this repo:
This repo contains AWS CDK implementation for the refactorings at [Serverless Land : Refactoring to Serverless](https://serverlessland.com/refactoring-serverless/intro) 


| Name | Description |
| ---- | ---- |
| [Extract Function Invocation](patterns/extract_function_invocation.md) | Instead of calling one Lambda function directly from another, use Lambda Destinations instead |
| [Extract Send Message to Lambda Destination](patterns/extract_send_message.md) | Instead of sending SQS messages via code, use Lambda Destinations instead |
| [Replace Lambda with Service Integration](patterns/service_integration.md) | Service integration allows direct calls to any AWS Service API from StepFunctions without the need for an additional Lambda function |
| [Replace Polling with Callback](patterns/replace_polling_with_callback.md) | Instead of polling for results, use StepFunctions Wait for a Callback with the Task Token  |
| [Direct database access](patterns/direct_database_access.md) | Replace a Lambda function that only reads from DynamoDB with Step Functions' `getItem` task  |
| [Extract Send Message to DynamoDB Stream](patterns/send-message-via-pipes.md) | Instead of a Lambda function sending a message after updating DynamoDB, use DynamoDB Streams plus EventBridge Pipes|
| [Orchestration to Choreography](patterns/orchestration_%20to_choreography.md) | Convert the collaboration pattern from orchestration to choreography |
| [Replace Parallel with SNS Scatter-Gather](patterns/parallel_to_sns_scatter_gather.md) | Instead of making parallel invocations from a StepFunctions `Parallel` step, send a message to SNS  |
|[Extract Message Router](patterns/extract-message-router.md)|Instead of using a Lambda function to route messages to different consumers, use EventBridge Rules|



## Owners
Gregor Hohpe, Enterprise Strategist, AWS  
Sindhu Pillai, Sr. Solutions Architect, AWS  

## Contributors
Svenja Raether,Associate ProServe Specialist, AWS  
Abel Fresnillo Silva, Sr. Solutions Architect, AWS  
Eugene Kim, Sr. Solutions Architect, AWS  
Pengfei Zhang, Sr. Solutions Architect, AWS  
Agostino Di Figlia, Sr. Cloud Application Architect, AWS

## Interested in Contributing?
More details [here](CONTRIBUTING.md)
