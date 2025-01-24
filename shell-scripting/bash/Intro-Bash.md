# Intro: Bash Scripting

Resource: [freeCodeCamp](https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/)

Use git bash on windows or wsl/linux vm.

## Definition

Example Use-cases:
- Navigating directories
- Creating folders
- Launcing processes

Saving this scripts allow you to repeat the same sequence of steps defined in it multiple times.  
Powerful and versatile tool for automating system administration, managing system resources and other routing tasks.

## Advantages

- Automation
    - Repetitive tasks, reduce errors (from manual automation), saving time
- Portability
    - multiple OSes e.g. Linux, macOS and Windows(through emulation/vm)
- Flexibility
    - Highly customizable to fit requirements
- Accessibility
    - Easy to write, doesn't need additional tools/software
- Integration
	- Can be integerated with tools such as databases, web servers, cloud services for automation/system management
- Debugging
	- Easy to debug, built in debugging/error-reporting


## Overview of BASH shell and CLI

Shell - program that provides CLI for interacting with OS  
Bash  - (Bourne-again SHell) Popular/commonly used UNIX/Linux shell

### 

### Shell / CLI
accept commands from user and provide output

```
[user@host ~]$
```

user@host - shell prompt  
- \$ - displayed when waiting for user command  
- \# - shell running as root

```
[root@host ~]# 
```

Determine shell type:

```
ps
```

Output: 

![](https://www.freecodecamp.org/news/content/images/2023/03/image-134.png)

### Summary

Shell - broad term, application that provides CLI
Bash - specific type of shell in widely used in UNIX/Linux

# Getting Started

General commands syntax:
```
command [OPTIONS] arguments
```

Basic Commands
- date - Display current date
- pwd - Display current directory
- ls - List current directory contents
- echo - Print text string or variable values
- man - Display manual of specific command

## Creating/Executing bash scripts

### Naming conventions
Scripts end with `.sh` but it is not necessary

### Shebang #!
Scripts start with a shebang. Points to the location of the CLI interpreter:
```
#!/bin/bash
```

Check bash location:
```
which bash
```

### Creating first bash script

Link: [Github](https://github.com/KaviV23/learning-exb/tree/main/shell-scripting/bash)  
File: [run_all.sh](./run_all.sh)

```
#!/bin/bash
where bash
echo "Today is " `date`

echo -e "\nenter the path to directory"
read the_path

echo -e "\nyour path has the following files and folders:"
ls $the_path
```

Things used:
1. echo
2. date
3. backticks (``)
4. read
5. ls


