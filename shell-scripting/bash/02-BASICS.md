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

# Input/Output
## Gathering input
**Reading from user input:**  
Command:
```
read <variable_name>
```

**Reading from file:**  
Example: 
[read_file.sh](./read_file.sh)
```
while read line
do
    echo $line
done < input.txt
```

**Reading CLI arguments:**

`$1`, `$2`, `$3` and so on...  
Example: [cli_arguments.sh](./cli_arguments.sh)
```
#!/bin/bash
echo "Hello, $1!"
```
```
$ ./cli_arguments.sh <name>
Hello, <name>!
```

## Displaying output
**Printing to terminal:**
```
echo "Hello!"
```

**Writing to file:**
```
echo "Several words of text." > output.txt
```
Note: The `>` operator overwrites any existing file of the same name

**Appending to file:**
```
echo "Another line of text!" >> output.txt
```
Note the `>>` operator used instead of `>`

**Redirecting output:**  
[redirect_output.sh](./redirect_output.sh)
```
ps > running_processes.txt
```
Outputs running processes to [running_processes.txt](./running_processes.txt)

# If/else statements
`if`, `if-else`, `if-elif-else`

**Syntax:**
```
if [[ condition  ]];
then
    statement
elif
    statement
else
    do this by default
fi
```
 
**Logical Operators:**
- AND: `-a`
- OR: `-o`
```
if [ $a -gt 60 -a $b -lt 100 ]
```

**Example script:**  
Checks if number and tells if number is postive/negative/zero  
[positive_negative.sh](./positive_negative.sh)
```
#!/bin/bash/

echo "Enter a number:"
read num

if [ $num -gt 0 ];
then
    echo "Number is positive"
elif [ $num -lt 0 ];
then
    echo "Number is negative"
else
    echo "Number is zero"
fi
```

# Loops

**While loop**  
Example: [while_loop.sh](./while_loop.sh)
```
#!/bin/bash
i=1
while [[ $i -le 10 ]];
do
    echo $i
    (( i += 1))
done
```
`(( i+= 1 ))` - counter statement. Needed to control the loop

**For loop**  
Example: [for_loop.sh](./for_loop.sh)
```
#!/bin/bash
for i in {1..5}
do
    echo $i
done
```

# Case statements

**Syntax:**
```
case expression in
	pattern1)
		# code when pattern1
		;;
	pattern2)
		# code when pattern2
		;;
	pattern3)
		# code when pattern3
		;;
	*)
		# code to run if no match
esac
```

`;;` seperates each block of code  
`*` is default case

**Example:** [case_statements.sh](./case_statements.sh)
```
fruit="apple"

case fruit in
    "apple")
        echo This is an apple
        ;;
    "banana")
        echo This is a banana
        ;;
    "orange")
        echo This is an orange
        ;;
    *)
        echo Unknown fruit
        ;;
esac
```

# Scheduling
Additional resource:  
[How to Automate Tasks with cron Jobs in Linux](https://www.freecodecamp.org/news/cron-jobs-in-linux/)

Scheduling in Unix-like OSes with `cron`  
```
# Example cron job
* * * * * sh /path/to/script.sh
```
Each `*` represent minutes, hours, days, months, weeks

| | Value | Description |
| - | - | - |
| Minutes | 0-59 | Execute at specific minute
| Hours | 0-23 | Execute at specific hour
| Days | 1-31 | Execute in these days
| Months | 1-12 | Month in which to be executed
| Weekdays | 0-6 | Days of the week where commands would run. 0 is sunday

- `sh` represents the script and shld be run from /bin/bash
- `/path/to/script.sh` specifies path

Website for praciticing crontab schedules:
[crontrab.guru](https://crontab.guru/)




# Debugging

- `set -x` at the begining of the script. debugging mode, prints every command executed after this command.
- `$?` prints the latest exit code. exit code 0 is success.
- `set -e` makes the script end with an error immediately after any commands failed to run
- cron logs can be found at `/var/log/syslog` (location depends on linux distribution)