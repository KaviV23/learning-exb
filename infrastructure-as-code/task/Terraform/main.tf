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

resource "aws_vpc" "testvpc1" {
	cidr_block = "10.0.0.0/16"
}

resource "aws_instance" "name" {
	ami = "ami-00b94073831733d2e"
	instance_type = "t2.micro"
}