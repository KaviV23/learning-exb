# Varibles
Variables are created with the `$` sign followed by its name.

```
$string = "Hello World"
```

A variable with the name `string` is initialized and asigned the string `Hello World`.

Variables are:
- NOT case sensitive. *E.g. $Hello = $HELLO*
- Are alphanumeric
- Can include spaces and special characters when inclosed in curly brackets `{}`, however it is recommended to use alphanumeric and underscores (`_`).

*Using a variable:*
```
PS > $hello
Hello World
```

# User Input
*Syntax:*
```
$num = Read-Host -Prompt "Enter a number"
```

Printing variables in sentences:
```
Write-Host "There are $input apples in that basket."
```

# Variable Types

- Int - positive and negative
- String - zero or more characters enclodes in double quotes `""`
- Boolean - values `$True` and `$False`
- Array - collection of items, can be different types

PowerShell has *dynamic typing*. The type depends on the value being assigned. The type depends on the value being assigned.

The default type is `$null`.

To check variable type, append `.GetType().Name` to the variable:

```
PS > $str = "Hello!"
PS > $str.GetType().Name
String
```

`GetType().Name` returns the name property of method called.

# Constrained Variables

```
PS > [Int]$age = 25
PS > $age = "twenty five"
Cannot convert value "age" to type "System.Int32". Error: "Input string was not in a correct format."
```

# Initialize Multiple Variables

You can initialize multiple variables with the same value in one statement:

```
$i = $j = $k = 0
```

Can also asign different values for each:
```
$a, $b, $c = 1, "Red", $false
```

NOTE! Notice the difference in operators (`=` vs `,`)

# Environment Variables

Stores information of Operating System and user sessions (e.g. terminal). They are global variables. The OS creates them, but we can make our own for our production environment.

*Listing env variables:*
```
Get-ChildItem Env:
```

Gets env variables from `Env:` drive

*Accessing env variables:*
```
(Get-ChildItem Env:TMP).Value # METHOD 1
$Env:TMP # METHOD 2
```

Two popular environment variables:
- `HOME` - Home directory of current user.
- `PATH` - Directories where applications look for executables.

*Creating env variables:*

```
$Env:EXAMPLE_ENV = "Custom value"
```

Environment variables are usually capitalized.

