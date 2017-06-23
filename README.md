# TK's Cuber

## How to run?

- You can play the [online version](https://tsankuanglee.github.io/cuber/) in your browser.
- Open index.html with your browser.

## How to play?

You can use mouse, finger swipe, or keyboard to rotate any slice of the cube. See the shortcuts on the upper-right corner of the screen.

Beginners may find on-screen key prmopts helpful. Press capital <kbd>P</kbd> to show that.

## What is this?

I enjoy [Ryan Heise's Rubik's Cube Simulator a lot](http://www.ryanheise.com/cube/speed.html), but I needed to make a few modification, and I'd like a more portable version to share with friends. I like Java myself, but non-techies around me are having trouble installing it. Therefore, I decided to look for a javascript version to improve.

This is a minimal hack to the upstream source, as a quick and dirty solution for me and my fellow cubers. I didn't bother to clean up the original code. Perhaps some time in the future.

The original Cuber framework was written by the very talented [Stewart Smith](https://github.com/stewdio/Cuber-DEMO). I customized it in the following ways:

### The new set of control keys are more suitable for my needs.

I need fast and intuitive keys, so the original SHIFT is gone, and keys are now symmetric between two hands.

#### Rotate Slices

Rotate Up, Equator, Down row from Front face to <kbd>Left</kbd>/<kbd>Right</kbd> (notice they are **symmetric** on the standard QWERTY keyboard):

|       | FRONT to LEFT  | FRONT to RIGHT |
|-------|:--------------:|:--------------:|
|UP     |<kbd>q</kbd>    |<kbd>p</kbd>    |
|EQUATOR|<kbd>a</kbd>    |<kbd>;</kbd>    |
|DOWN   |<kbd>z</kbd>    |<kbd>/</kbd>    |


Rotate Back, Standing, Front row from Top to Left/Right:

|        | TOP to LEFT  | TOP to RIGHT |
|--------|:------------:|:------------:|
|BACK    |<kbd>w</kbd>  |<kbd>o</kbd>  |
|STANDING|<kbd>s</kbd>  |<kbd>l</kbd>  |
|FRONT   |<kbd>x</kbd>  |<kbd>.</kbd>  |


Rotate Left, Middle, Right column from Top to Back/Front (for symmetry, R and U do the same thing, so do V and N).

|            | LEFT       | MIDDLE                     | RIGHT      |
|------------|:----------:|:--------------------------:|:----------:|
|TOP to BACK |<kbd>e</kbd>|<kbd>r</kbd> or <kbd>u</kbd>|<kbd>i</kbd>|
|TOP to FRONT|<kbd>c</kbd>|<kbd>v</kbd> or <kbd>n</kbd>|<kbd>m</kbd>|


#### Rotate The Whole Cube

|     | TOP to                     |
|----:|:--------------------------:|
|BACK |<kbd>t</kbd> or <kbd>y</kbd>|
|FRONT|<kbd>b</kbd> or <kbd>n</kbd>|

|      | LEFT       |RIGHT       |
|-----:|:----------:|:----------:|
|TOP to|<kbd>g</kbd>|<kbd>h</kbd>|

|        | LEFT       |RIGHT       |
|-------:|:----------:|:----------:|
|FRONT to|<kbd>f</kbd>|<kbd>j</kbd>|


#### Shuffle, Undo, Redo, etc.

* <kbd>?</kbd> (<kbd>SHIFT</kbd><kbd>/</kbd>): toggle help text
* <kbd>SHIFT</kbd><kbd>F</kbd>: shuFfles the cube
* <kbd>SHIFT</kbd><kbd>U</kbd>: Undo
* <kbd>SHIFT</kbd><kbd>R</kbd>: Redo
* <kbd>SHIFT</kbd><kbd>P</kbd>: toggle shortcut Prompts
* <kbd>SHIFT</kbd><kbd>T</kbd>: toggle Timer

### All tiles are visiable all at once

This saves a lot of rotating turns.

## Credit

* The original Cuber framework was written by the very talented [Stewart Smith](https://github.com/stewdio/Cuber-DEMO).
* Timer is based on [Billy Brown's work](https://codepen.io/_Billy_Brown/pen/dbJeh).
