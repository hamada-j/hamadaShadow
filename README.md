#              hamadaShadow
    \               Hi!         /
     \                         /
      \    This is fine npm   /
       ]        package      [
       ]        Hamada       [    ,'|
       ]                     [   /  |
       ]___               ___[ ,'   |
       ]  ]\             /[  [ |:   |
       ]  ] \           / [  [ |:   |
       ]  ]  ]         [  [  [ |:   |
       ]  ]  ]__     __[  [  [ |:   |
       ]  ]  ] ]\ _ /[ [  [  [ |:   |
       ]  ]  ] ] (#) [ [  [  [ :===='
       ]  ]  ]_].nHn.[_[  [  [
       ]  ]  ]  HHHHH. [  [  [
       ]  ] /   `HH("N  \ [  [
       ]__]/     HHH  "  \[__[
       ]         NNN         [
       ]         N/"         [
       ]         N H         [
      /          N            \
     /           q,            \
    /                           \

## What is this?

Get perfect Hamada shadow every time form the non-disigner developer.

## Installation

`npm i hamadaShadow --save`

## How to use?

```javascript
import { hamadaShadow } from "hamadaShadow";

hamadaShadow({
  shadow_type: "soft",
  padding: false,
});
```

## Options

hamadaShadow support 2 options:

- _shadow_type_ - _hard | soft_ ( By default to soft)
- _padding_ - _boolean_ (By default to false)

## Source Code

```javascript
function hamadaShadow(options) {
  let element = document.querySelectorAll(".hamadaShadow");

  if (options.shadow_type === "hard") options.shadow_type = "0px";
  else options.shadow_type = "15px";

  element.forEach((e) => {
    e.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgb(0,0,0,0.12)`;
    if (options.padding) {
      e.style.padding = "1rem";
    }
  });
}
..```.

