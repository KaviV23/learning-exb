# CloudFormation Task

Template for Provision VPC and EC2 on AWS

```
AWSTemplateFormatVersion: "2010-09-09"
Description: Tempate for Provisioning EC2 and VPC Instance

Resources:
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsSupport: true
      EnableDnsHostnames: true

  Subnet:
    Type: AWS::EC2::Subnet
    Properties:
      CidrBlock: 10.0.1.0/24
      AvailabilityZone: ap-southeast-1a
      VpcId: !Ref VPC

  EC2:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-00b94073831733d2e
      InstanceType: t2.micro
      SubnetId: !Ref Subnet
```

## Deploy the Stack

```
aws cloudformation create-stack --stack-name CF-VPC-EC2 --template-body file://CF-VPC-EC2-Template.yaml
```

## Delete the Stack

```
aws cloudformation delete-stack --stack-name CF-VPC-EC2 
```