#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PollingExample } from '../lib/replace-polling-with-callback-before';
import { CallbackExample } from '../lib/replace-polling-with-callback-refactored';
import { NagSuppressions, AwsSolutionsChecks } from 'cdk-nag';

const app = new cdk.App();

cdk.Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }))


// Before example polling for the result
const PollingStack = new PollingExample(app, 'StepFunctionWithPolling', {});

// Refactored example waiting for the callback with task token
const CallbackStack = new CallbackExample(app, 'StepFunctionWithCallback', {});

const NagSupressionList = [
    { id: 'AwsSolutions-SQS3', reason: 'This is demo stack, hence ignoring DLQ aspect' },
    { id: 'AwsSolutions-SQS4', reason: 'This is demo stack, hence ignoring enforce SSL aspect' },
    { id: 'AwsSolutions-SF1', reason: 'This is demo stack, hence ignoring Cloudwatch logging from StepFunction' },
    { id: 'AwsSolutions-SF2', reason: 'This is demo stack, hence ignoring X-Ray tracing' },
    { id: 'AwsSolutions-IAM5', reason: 'CloudWatch log-group arn has extra :*,  lambdaInvoke L2 construct adds IAM with *' },
]

NagSuppressions.addStackSuppressions(PollingStack, NagSupressionList)
NagSuppressions.addStackSuppressions(CallbackStack, NagSupressionList)

