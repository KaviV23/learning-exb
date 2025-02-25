# AWS CDK Crash Course for Beginners

Video link: [YouTube](https://youtu.be/D4Asp5g4fp8?si=QfolYIjcrEQZC6Am)

## Contents:

1. Initialize a local CDK project.
2. Examine project structure.
3. Create and deploy constructs.

## Prerequisites:

1. Node.js - [Download](https://nodejs.org/en/download) - Node.js.
2. AWS CLI - [Download](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) - AWS Docs.
3. CDK - `npm install -g aws-cdk`.
4. TypeScript - `npm -g install typescript`.
5. Configure `aws-cli` credentials:  
    1. Set-up IAM user to access AWS from AWS CLI. Give it Programitic access. **Root user is NOT RECOMMENDED**.
    2. Generate credentials. Run `aws configure` and enter in generated public/private keys.

## Initializing Project
Create a project folder and run the following command inside it:

```
cdk init app --language typescript
```

This generates the following file structure:

- `./bin/*_app.ts` - One app file per project. Defines one or more stacks.
- `./bin/*_app-stack.ts` - Can have multiple stack files. Contains constructs.

*A few `cdk` commands:*

- `cdk synthesize` - Compile CDK into CloudFormation templates.
- `cdk bootstrap` - First time using CDK in an AWS account or region.
- `cdk watch` - Watch filesystem for changes and update accordingly.
- `cdk destroy` - Cleans files.
- `cdk list` - Lists stacks in the app.


**Prepare the AWS environment:**

```
cdk bootstrap
```

This creates a new stack on AWS CloudFormation.

**Add new resources to the stack:**  
Edit the `./lib/cdk_demo_app-stack.ts` file and add the following to the dedicated area for resource definitions:

```
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
```

**Take down the stack:**

```
cdk destroy
``` 

This will not remove S3 buckets if there are any provisioned.
