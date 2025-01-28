# Operators

Different types of operators for manipulating data:
- Arithmetic
- Assigment
- Unary
- Comparison
- Logical

# Arithmetic Operators
- `+` - Add numbers, concatenate strings.
- `-` - Subtract or negate.
- `*` - Multiplication or copies string multiple times.
- `/` - Divides numbers.
- `%` - Returns remainder from division

Arithmetic operators are binary. Needs two operands for each operator.

```
<operand_1> <arithmetic_operator> <operand_2>
11 + 3
```

Operators best used with variables

```
PS > $number = 25
PS > $number / 5
5

PS > $number = $number * 3
PS > $number
75
```

Can also be used on strings (`+` and `*` only).
- `+` - for concatenation
- `*` - for copying (repeating) strings

# Assignment Operators

To `assign`, `change` and `append` to variables.

```
<variable> <assignment_operator> <value>
```

Assignment operator: `=`  
Compound assignment operator: `+=`, `-=`, `*=`, `/=` and `%=`

The operators precede the assignment as operations are carried out first.

*Use of concatenation on environment variables:*

```
$Env:EXAMPLE = "Some value"
$Env:EXAMPLE += "; another value"
$Env:Example
# Output: Some value; another value
```

This would be helpful for editing/adding to the `PATH` environment variable.

# Unary Operators

Unary operators operate on single variable operand.  
E.g. `++` and `--` that increase/decrease the value of the variable by one respectively. An easy/readable way to increment/decrement values.

# Equality Operators

Compare values, test conditions or filter out array elements.

- `-eq` - equal
- `-ne` - not equal
- `-gt` - greater than
- `-lt` - lower than
- `-ge` - greater than or equal
- `-le` - lower than or equal

Remember, strings are NOT case sensitive!

```
PS > "tomato" -eq "TOMATO"
True
```

# Logical Operators

Allows us to combine multiple `True`/`False` expressions/statements into complex conditionals.

- `-and` - True when both statements are True
- `-or` - True when either statement is True
- `-xor` - True when ONLY ONE statement is True
- `-not`/`!` - Negation

*Usage of `-and`, `-or`, `-xor`:*

```
$is_true = (10 -lt 11) -and (5 -gt 2)
```

*Usage of `-not`, `!`:*

```
$is_true = !(5 -lt 2)
$is_true = -not (5 -lt 2)
```

# Operator Precedence (BODMAS/PADMAS)

Evaluation of operators by order:
1. `()`
2. `++` `--`
3. `!` `not`
4. `*` `/` `%`
5. `+` `-`
6. `-is` `-isnot` `-as`
7. `-eq` `-ne` `-gt` `-ge` `-lt` `-le`
8. `-contains` `-notContains`
9. `-and` `-or` `-xor`
10. `=` `+=` `-=` `*=` `/=` `%=`

Used when multiple operators used in a single expression.  
Parenthesis `()` can be useful in overriding precedence order.
