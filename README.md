# TK's Cuber

The original Cuber framework was written by the very talented Stewart Smith. I customized it in the following ways:

## The new set of control keys are more suitable for my needs.

I need fast and intuitive keys, so the original SHIFT is gone, and keys are now symmetric between two hands.

### rotate slices

Rotate Up, Equator, Down row from Front face to Left/Right (notice they are symmetric on the standard QWERTY keyboard):
```
Q P
A ;
Z /
```

Rotate Back, Standing, Front row from Top to Left/Right:
```
W O
S L
X .
```

Rotate Left, Middle, Right column from Top to Back/Front (for symmerty, R and U do the same thing, so do V and N).
```
E RU I (move to Back)
C VN M (move to Front)
```



### Rotate whoel cube
```
Top to Back/Front: TY BN
Top to Left/Right: F J
Front to Left/Right: G H
```

## Shuffle
```
Capital S shuffles the cube
```


# Original README.md

Cuber is a Rubik's cube simulator written in javascript with a little bit of three.js thrown in for good measure. It uses CSS 3D transforms and has a programmatic API, and has different rendering outputs.


### Getting started

Download the [minified file](/build/cuber.min.js), the [css](/build/cube.css) and include it in your project.

```html
<script  charset="utf-8" src="js/cuber.min.js"></script>
<link rel="stylesheet" type="text/css" href="styles/cube.css">
```

Create a new Cube, attach it to your DOM and you're good to go.

```javascript
var cube = new ERNO.Cube();
document.body.appendChild( cube.domElement );
```


### Commands

Cuber is interactive, but you can also twist slices programmatically. We use a variation of the [Singmaster notation](http://en.wikipedia.org/wiki/Rubik's_Cube#Move_notation) which uses a single character and it's case to denote a move. For example `cube.twist( 'U' )` rotates the Upper face clockwise. You can also chain multiple moves into a sequence such as `cube.twist( 'UDLF' )`.

You can also use `cube.undo()` and `cube.redo()` to step through the move history. `cube.shuffle( 5 )` shuffles the cube 5 times. 



Examples
------------------------------------------------------------------------------

__From the desktop__  
Take a look at the [basic example](/index.html). This demonstrates many of the api settings.
