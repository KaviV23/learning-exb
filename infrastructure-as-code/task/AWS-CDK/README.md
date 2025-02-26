# AWS CDK Task

Constructs for Provisioning VPC and EC2 on AWS

```
const VPC = new ec2.Vpc(this, "CdkTestVPC", {
    cidr: "10.0.0.0/16",
    natGateways: 1,
});

const EC2 = new ec2.Instance(this, "CdkTestEC2", {
    vpc: VPC,
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
    machineImage: ec2.MachineImage.latestAmazonLinux2(),
})
```

## Deploy the Stack

Before deploying the stack, ensure CDKToolkit is bootstrapped:

```
cdk bootstrap
```

Then deploy the stack with the following command:

```
cdk deploy
```

## Take Down the Stack

```
cdk destroy
```
