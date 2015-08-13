/**
 * Created with PyCharm.
 * User: maoting
 * Date: 4/8/14
 * Time: 12:16 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * Created with PyCharm.
 * User: maoting
 * Date: 4/7/14
 * Time: 10:24 PM
 * To change this template use File | Settings | File Templates.
 */
/*
Copyright (C) 2012 Web3Canvas. All Rights Reserved.
*/


/* Define the number of petal to be used in the animation */
const NUMBER_OF_petal = 30;

/*
    Called when the "Falling petal" page is completely loaded.
*/
function init()
{
    /* Get a reference to the element that will contain the petal */
    var container = document.getElementById('petalContainer');
    /* Fill the empty container with new petal */
    for (var i = 0; i < NUMBER_OF_petal; i++)
    {
        container.appendChild(createApetal());
    }
}


/*
    Receives the lowest and highest values of a range and
    returns a random integer that falls within that range.
*/
function randomInteger(low, high)
{
    return low + Math.floor(Math.random() * (high - low));
}


/*
   Receives the lowest and highest values of a range and
   returns a random float that falls within that range.
*/
function randomFloat(low, high)
{
    return low + Math.random() * (high - low);
}


/*
    Receives a number and returns its CSS pixel value.
*/
function pixelValue(value)
{
    return value + 'px';
}


/*
    Returns a duration value for the falling animation.
*/

function durationValue(value)
{
    return value + 's';
}


/*
    Uses an img element to create each petal. "petal.css" implements two spin
    animations for the petal: clockwiseSpin and counterclockwiseSpinAndFlip. This
    function determines which of these spin animations should be applied to each petal.

*/
function createApetal()
{
    /* Start by creating a wrapper div, and an empty img element */
    var petalDiv = document.createElement('div');
    var image = document.createElement('img');

    /* Randomly choose a petal image and assign it to the newly created element */
    image.src = 'petalimages/petal' + randomInteger(1, 6) + '.png';

    petalDiv.style.top = "-100px";

    /* Position the petal at a random location along the screen */
    petalDiv.style.left = pixelValue(randomInteger(0, 1000));

    /* Randomly choose a spin animation */
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';

    /* Set the -webkit-animation-name property with these values */
    petalDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;

    /* Figure out a random duration for the fade and drop animations */
    var fadeAndDropDuration = durationValue(randomFloat(5, 11));

    /* Figure out another random duration for the spin animation */
    var spinDuration = durationValue(randomFloat(4, 8));
    /* Set the -webkit-animation-duration property with these values */
    petalDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

    var petalDelay = durationValue(randomFloat(0, 5));
    petalDiv.style.webkitAnimationDelay = petalDelay + ', ' + petalDelay;

    image.style.webkitAnimationDuration = spinDuration;

    // add the <img> to the <div>
    petalDiv.appendChild(image);

    /* Return this img element so it can be added to the document */
    return petalDiv;
}

/* Calls the init function when the "Falling petal" page is full loaded */
window.addEventListener('load', init, false);