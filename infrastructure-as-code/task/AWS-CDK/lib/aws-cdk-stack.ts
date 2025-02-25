import * as cdk from 'aws-cdk-lib';
import { Ec2Action } from 'aws-cdk-lib/aws-cloudwatch-actions';
import { AmazonLinuxImage, Instance, InstanceArchitecture, InstanceClass, InstanceSize, Vpc } from 'aws-cdk-lib/aws-ec2';
import { InstanceProfile } from 'aws-cdk-lib/aws-iam';
import { InstanceType } from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const VPC = new Vpc(this, "CdkTestVPC", {
      cidr: "10.0.0.0/16"
    });

    const EC2 = new Instance(this, "CdkTestEC2", {
      instanceType: cdk.aws_ec2.InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
      machineImage: new AmazonLinuxImage(),
      vpc: VPC,
    })
  }
}
