terraform {
	required_providers {
		aws = {
			source = "hashicorp/aws"
			version = "~> 5.0"
		}
	}
}

provider "aws" {
	region = "ap-southeast-1"
}

resource "aws_vpc" "tfTestVpc" {
	cidr_block = "10.0.0.0/16"
	enable_dns_hostnames = true
	enable_dns_support = true
}

resource "aws_subnet" "tfTestSubnet" {
	cidr_block = "10.0.1.0/24"
	vpc_id = aws_vpc.tfTestVpc.id
}

resource "aws_instance" "tfTestEc2" {
	ami = "ami-00b94073831733d2e"
	instance_type = "t2.micro"
	subnet_id = aws_subnet.tfTestSubnet.id
}