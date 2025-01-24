# Comments
Comments start with '#"
```
# Example comment
```

# Variables & Data types
There are no data types in bash.  
Can store numbers, characters and strings of characters.

Directly assigning values:
```
country=Malaysia
```

Assigning from another variable:
```
same_country=$country
```

Accessing variables:  
Append `$` infront of variable names
```
user@host:~$ echo $country
Malaysia
```

## Naming Conventions
Rules:
1. Start with letter or underscore (`_`).
2. Contain letter, numbers, and underscores (`_`).
3. Case-sensitive.
4. No spaces or special characters.
5. Descriptive
6. No reserved keywords: `if`, `then`, `else`, `if` and more.

```
# Valid names
name
count
_var
myVar
MY_VAR

# Invalid names
2ndvar
my var
my-var
```

# Input output

**Reading from user input:**  
Syntax:
```
read <variable_name>
```

**Reading from file:**  
Syntax:
```
while read line
do
    echo $line
done < input.txt
```
[read_file.sh](./read_file.sh)
