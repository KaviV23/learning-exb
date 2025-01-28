# Control Flow

Consists of conditional statements and loops:

- `if`, `else`, and `elif` statements.
- `switch` statements.
- `for` and `foreach` statements.
- `while` and `do`...`while` and `do`...`until` statements.
- `break` and `continue` commands.

# Conditional Statement

## If Statement

*`if` statement syntax:*

```
if ($myVar -eq 2) {
    Write-Host "True statement"
}
```

Two parts in the `if` statement:
- conditional statement.
- body of code to run when condition is true.

## Else, Elseif Statements

*If, else syntax:*

```
if ($myVar -eq 2) {
    Write-Host "True statement"
} else {
    Write-Host "False statement
}
```

*If, elseif, else syntax:*

```
if ($myVar -lt 0) {
    Write-Host "Negative Number"
} elseif ($myVar -gt 0) {
    Write-Host "Positive Number"
} else {
    Write-Host "Zero"
}
```

## Switch Statements

*Basic switch statement syntax:*

```
$myVar = 5
switch ($myVar) {
    10 {
        Write-Host "It's 10"
    }
    5 {
        Write-Host "It's 5"
    }
    default {
        Write-Host "Some other number"
    }
}
```

*More complex syntax with conditional expressions:*

```
$myVar = 5
switch ($myVar) {
    {$_ -gt 5} {
        Write-Host "Greater than 5"
    }
    {$_ -lt 5} {
        Write-Host "Less than 5"
    }
    default {
        Write-Host "It's 5"
    }
}
```

`$_` represents `$myVar` in this instance.

If more than one expression is `$True`, then more than one code block will also be executed.

*Example:*
```
$myVar = 10
switch ($myVar) {
  {$_ -gt 5} { 
    Write-Host "Greater than 5"
  }
  {$_ -gt 0} { 
    Write-Host "Greater than 0" 
  }
}

# OUTPUT:
# Greater than 5
# Greater than 0
```

This is where `switch` statements can be useful, as it does not stop checking like in `if` statements. To prevent the rest of the conditions to be checked, we can use the `break` command.

# Loops

## For Loops

Three steps to creating `for` loops:

- initialize counter variable
- setting stop condition from counter variable
- changing the counter variable

*Syntax:*

```
for ($i = 0; $i -lt 3; $i++) {
    Write-Host "i is $i"
}
```

## For Each Loops

*Syntax:*

```
$arr = 11, 22, 33, 44, 55
foreach ($x in $arr) {
    Write-Host "Current element is:" $x
}
```

## While Loop

Runs the code block as long as the condition is true. To avoid an infinite loop, a counter is also implemented here just like for loops, but in the body of the loop instead.

*Syntax:*
```
$i = 0
while ($i -lt 10) {
    Write-Host $i
    $i++
}
```

## Do While/Do Until

If you need to run one iteration before any checking of condition ever takes place, you should use `do`...`while` and `do`...`until` loops.

*`Do`..`while` syntax:*

```
$secretNum = 6
do {
    $guess = Read-Host "Guess a number from 1-10"
} while ($guess -ne $secretNum) 
Write-Host "You guessed right!"
```

Repeat while guess is wrong.

*`Do`..`until` syntax:*

```
$secretNum = 3
do {
    $guess = Read-Host "Guess a number from 1-10"
} until ($guess -eq $secretNum) 
Write-Host "You guessed right!"
```

Repeat until number has been guessed.

## Break, Continue

It is okay to rely on conditional statements to end a loop. However, it is sometimes useful to be able to exit or skip a loop early.

Commands:
- `break` - will exit the loop it is executed in.
- `continue` - will skip an iteration of the loop it is in.
