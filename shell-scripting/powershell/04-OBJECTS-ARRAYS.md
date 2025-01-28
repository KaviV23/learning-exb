# Objects & Arrays

Other shells like `Bash` use rely on strings for output, which forces us to rely on other commands to parse them (formatting/filtering).

`PowerShell` is object-oriented, which includes outputs of commands. This makes data processing easier.

An object consists of:
1. Properties - Variables that describe the object.
2. Methods - Functions that describe how to use the object.

Each object is a blueprint, a form of *type* or *class*.

All information associated to an object is a member.
You can check the members of an object with the following command:

```
Get-Member -InputObject "Example string"
```

Another, more common method:

```
"Example String" | Get-Member
```

These commands list the methods and properties associated with the specified object.

*Check specifically for Member:*
```
"Example" | Get-Member -MemberType Property
```

# Object Methods: Strings

- Contains() - Check for specified substring. Returns True/False
- Replace() - Replaces specified substring with another specified one.
- GetType() - Gets type of the object (Not exclusive to String objects).

# Creating Objects - Old Method

Use the CmdLet `New-Object`.

```
New-Object -TypeName PSCustomObject
```

The command creates a new object with the `PSCustomObject` type. It is now a new class. `PSCustomObject` is the only valid type for custom objects.

Newly created custom objects will come with four methods and no properties.

## Adding Properties

Add methods/properties with `Add-Member` CmdLet. The type of the member can be specified with the argument `-MemberType`.

Properties are added using the `NoteProperty` type for key-value pair properties.

```
$dog | Add-Member -MemberType NoteProperty -Name "Name" -Value "Rufus"
$dog | Add-Member -MemberType NoteProperty -Name "Age" -Value 10
```

## Adding Methods

Same as before, but instead of `NoteProperty`, we use `ScriptMethod`.

```
$dog | Add-Member -MemberType ScriptMethod -Name "speak" -Value { Write-Host "Woof!" }
```

# Creating Object - New Method (Hashtables)

An easier way to create custom objects and add properties/methods is by using hastables.

*Syntax:*

```
$dog = [PSCustomObject]@{
    Name = "Rufus"
    Age = 10
}
```

This method is identical to the previous method. `[PSCustomObject]` casts a type onto the hashtable. This method is easier to use and is more readable.

#  Arrays

## Creating Arrays

A variable that can hold more than one value. Can be of same type or different types.

*Simplest way of creating arrays*

```
$my_arr = 12, "Str", $True
```

Simplest way to create arrays is with commas `,`. However, you can also use the subexpression operator `@( )` to create arrays, which act as a single element. This increases the possibilities of ways to create arrays.

*Example using subexpression operator:*

```
# Single line, 4 elements
$my_arr = @(1, "Str", 234, $False) 

# Empty array
$my_arr = @( ) 

# Multi-line array
$my_arr = @( 
    "egStr"
    123
    456
    $True
)
```

## Accessing Arrays

### Indexing

Easiest way to access array items is with their index numbers. Index starts at `0`.

```
$colors = "red", "yellow", "black", "blue"
$colors[2]
```

Accessing an array index that is out of range will NOT result in an array, but return $null. Printing null in the terminal actually prints nothing, but can have affects on other code.

Arrays have `Length` and `Count` properties. Both will return the same value.

### Update Items

*Indexes can be used to update items:*

```
$colors[2] = "white"
```

### Index Tricks

*Access multiple values with `,`:*

```
$colors[0,1]
```

*Access range of values with `..`:*

```
$colors[1..3]
# returns 3 elements
```

*Access values in reverse:*

```
$colors[3..1]
```

*Access last value with `-`:*

```
$colors[-1]
```

## Iteration

Arrays have a `ForEach()` function that can be used to act on each array item. `PSItem` or underscores (`_`) can be used to refer to each of those items.

```
$colors.ForEach( { $PSItem.Length } )
$colors.ForEach( { $_.Length } )
```

## Array Operators

**Adding Arrays**

The `+` operator concatenates/combines arrays

```
$arr1 = 1,2,3
$arr2 = 4,5,6
$arr1 += $arr2
```

**Multiplying Arrays**

Multiplying arrays (`*`) with numbers will repeat the elements of the array.

```
$arr1 * 2
```

Can also use multiplication/addition assignments (`+=`/`*=`) to modify the existing array.

**Containment Operators**

- `-contains`: `<array> -contains <item>`
- `-notcontains`: `<array> -notcontains <item>`
- `-in`: `<item> -contains <array>`
- `-notin`: `<item> -notin <array>`

Self-explanatory. Will return `$True`/`$False` depending on the conditions.
`-contains` and `-in` are the same. Just the order of operands are different.

**Join Operator**

Will change what seperates the individual items in an array. The default is commas `,`. Use `-join` to change to another character or string.

```
PS > $arr1 = $arr1 -join "->"
# NOTE: $arr1 is now a String
PS > $arr1
1->2->3->4->5->6
```

## Strongly Typed Arrays

Similar to constrained variables, arrays can be forced to have a specified data type.

```
[String[]]$fruits = "apple", "banana", "kiwi"
```

## Array of Objects

Arrays can contain objects as well.

```
$dogs = @(
    [PSCustomObject]@{Name = "Rufus"; Age = 10}
    [PSCustomObject]@{Name = "Miku"; Age = 2}
)
```

Then each of these objects and its properties/methods can be accessed later.

```
$dogs.ForEach({
    $_.Name + " is " + $_.age + " years old"
})
```