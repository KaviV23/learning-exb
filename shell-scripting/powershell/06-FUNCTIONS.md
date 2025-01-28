# Functions

*Syntax:*

```
Function greet {
    Write-Host "Hello, there!"
}
```

*To call the function:*

```
PS > greet
Hello, there!
```

Promotes code reuse, easy to modify when used in multiple places at once.

## Components of a Function

- the `Function` keyword
- descriptive function name
- code body inside curly brackets

Functions should be named with action verbs like other CmdLets.

## Parameters

*To use parameters:*

```
Function greet {
    param($name, $timeOfDay)
    Write-Host "Good $timeOfDay, $name"
}
```

*Calling the function:*

```
PS > greet "John", "Morning"
Good Morning, John
```

## Default Parameters

*Adding default parameters:*

```
Function greet {
    param($name, $timeOfDay = "Morning")
    Write-Host "Good $timeOfDay, $name"
}
```

*Calling without second parameter:*
```
PS > greet "John"
Good Morning, John
```
