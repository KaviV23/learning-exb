# Powershell Scripting
Resource:
[Codecademy: Learn Powershell](https://www.codecademy.com/enrolled/courses/learn-powershell)

# Introduction
- Powershell introduced in 2006
- Powerful for windows automation
- Can also be installed on MacOS/Linux to run PS apps

## What is PowerShell
- A shell and scripting language
- Run programs and complex scripts
- Automate administration tasks

Even though GUIs exists, CLIs are better for certain tasks.  
E.g. creating 20 folders, mouse clicks and movements will take forever. With scripting, you can make folders from a list of names.

GUIs may be programmed to do these things, but it is far quicker and cheaper to use the CLI.

*Terminal output:*
```
Write-Host "Hello, World!"
```

Terminal output is a way for getting feedback from a PS commands/scripts.

# Basic Commands
Commands are written in the `Verb`-`Noun` format. Makes it easier to understand what it does.

```
Get-Date # Gets current date
```

`Write-Host` and `Get-Date` are some of many CmdLets. You can list all of them down with the following command:

```
Get-Command
```

Without arguments, the command will return all CmdLets. We can look for specific commands with arguments.

*E.g. list all commands with `Get` verb:*

```
Get-Command -Verb Get
```

*E.g. list all commands with `Host` noun:*

```
Get-Command -Noun Host
```

To clear the terminal that is cluttered with previous commands and output:

```
Clear-Host
```

# Using the Terminal
## Command Completion 

You can press `Tab` key to autocomplete the command you want. If there are multiple options available, all potential autocompletes will be listed.

```
PS > Get-H
Get-Help   Get-History   Get-Host
```

## Command History

Command history is stored in a file. To access it:

```
Get-History
```

Can also use up/down keys on the keyboard to cycle through commands

# Writing Scripts

To write scripts, open any text editor, type the commands and save it with a `.ps1` extension.

[host-commands.ps1](./host-commands.ps1):
```
Write-Host "All commands that act on Host:"
Get-Command -Noun Host
```

*Running the script:*

```
.\host-commands.ps1
```

`.\` - look in the current directory  
`host-commands.ps1` - script name

# Recap Quiz (Answers)
- Command for clearing terminal = `Clear-Host`
- Powershell commands are called `CmdLets`. Each command follow the `Verb`-`Noun` format.
- Powershell is NOT limited to Windows. Can be installed on MacOS and Linux
- `Get-Date` for getting current date.
- Ways to retrieve command history: `Get-History` and pressing `Up Arrow` or `Down Arrow` keys on keyboard.
- `Tab` for command completion.
- Use powershell scripts for automating repetitive tasks
- `.\` to run PS scripts in current directory
