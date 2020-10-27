"use strict";

/*const num = 50;
if (num < 50) {
    console.log("Error");
} else if ( 100 > num) {
    console.log("Error");
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');*/

const num = 50;
switch (num) {
    case 49:
        console.log('No!');
        break;
    case 100:
        console.log('No!');
        break;
    case 51:
        console.log('YEP!');
        break;
    default:
        console.log(' not this time');
        break;
}