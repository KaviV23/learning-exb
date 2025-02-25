import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDemoAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkDemoAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    //
    // stack definition: constructs
    const L1Bucket = new CfnBucket(this, "TestL1Bucket", {
        versioningConfiguration: {
            status: "Enabled"
        }
    });

    const L2Bucket = new Bucket(this, "TestL2Bucket", {
        bucketName: "testl2bucket2902834", // has to be unique
        versioned: true
    });
  }
}
