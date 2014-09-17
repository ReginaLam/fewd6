var score = 0;

function reset() {
score = 0;
document.getElementById('result').innerHTML = score;
}
/*innerHTML is a string that represents the contents of that element.

^This is a paragraph of Javascript. You can have multiple __ in this paragraph. Notice the camel case.
This code doesn't get run until the function gets called (below).
*/

// score = score + 5;
// The shorthand way plus-equals operator is below:

function addFive() {
score += 5;
document.getElementById('result').innerHTML = score;
}

function addTen() {
score += 10;
document.getElementById('result').innerHTML = score;
}

// score -= 1;
// The shorthand way, increment/d-increment operator (<-look up), is below:

function minusOne() {
score --;
document.getElementById('result').innerHTML = score;
}

/*document is an object that represents the DOM tree (notice dot notation):
document.getElementById('zero'). <- this gets the element, then this
.onclick = reset;
says what to do with it.
'result' is an argument.

*/
document.getElementById('zero').onclick = reset;
document.getElementById('add5').onclick = addFive;
document.getElementById('add10').onclick = addTen;
document.getElementById('sub1').onclick = minusOne;

/*
onclick is always lower case!
JAVASCRIPT IS CASE SENSITIVE.
To do multiple line comments,
use CSS comments
*/

// To find the elements (buttons), look at where they are are in the DOM.



