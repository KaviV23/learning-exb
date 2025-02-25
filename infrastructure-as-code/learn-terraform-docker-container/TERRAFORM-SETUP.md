# Terraform Set-up
Reference link: [Terraform Docs](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)

## Installing Terraform

Download from the link above. Manual installation via zip or use package managers such as Homebrew or Chocolatey. Manual installation requires the binaries to be added to the system path variable.

Linux installation:

1. Install HashiCorp's Debian package repo:

```
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common
```

2. Install Hashicorp GPG key:

```
wget -O- https://apt.releases.hashicorp.com/gpg | \
gpg --dearmor | \
sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null
```

3. Add the official HashiCorp repo to your system.

```
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \
sudo tee /etc/apt/sources.list.d/hashicorp.list
```

4. Install Terraform

```
sudo apt update
sudo apt install terraform
```

## Initialize Terraform Project

1. Create new project folder and cd into it:
2. Create new `main.tf` file:

```
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {
  host    = "npipe:////.//pipe//docker_engine"
}

resource "docker_image" "nginx" {
  name         = "nginx"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.image_id
  name  = "tutorial"

  ports {
    internal = 80
    external = 8000
  }
}
```

3. Initialize the project

```
terraform init
```

This downloads the provider plugin. Lets Terraform interact with Docker.

4. Deploy the project to provision the NGINX server container:

```
terraform apply
```

A prompt will ask the user for confirmation. Typing `yes` will start up the container. It should be running on [localhost:8000](http://localhost:8000)

5. To take down the project:

```
terraform destroy
```

This will also ask for confirmation before taking down the docker container.