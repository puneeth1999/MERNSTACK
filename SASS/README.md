# Syntactically Awesome Style Sheets

It's a CSS extension
<br>
Need a SASS compiler to convert it back to normal CSS because the browser cannot actually read Sass directly.
<br>
There are a couple of options to pick a compiler.
<br>

1. NPM package `using CLI npm pretty much suck on win machines`
2. VS Code ext., etc
   <br>

There are two ways you could write Sass

1. using .scss
2. using .sass
   <br>

Use .scss as much as possible
<br>
Sass makes variables, modules and nesting possible.
<<<<<<< HEAD
<br>
`@function` could be used to create a function.
<br>
to call these kinds of functions, just use the function's name.
<br>
`@mixin` could be used to create functions that don't return anything.
<br>
However, to call these functions, we need to
<br>
`@include <function-name>`
<br>
Use `%class` from `%class-name` inorder to create and use `@extend` to use templates.
<br>
Example:
<br>

```
%btn{
   background:#eee;
}
.btn-first{
   @extend %btn;
   <!-- code here -->
}
```
