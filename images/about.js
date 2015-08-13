/**
 * Created with PyCharm.
 * User: maoting
 * Date: 4/8/14
 * Time: 3:15 PM
 * To change this template use File | Settings | File Templates.
 */
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


/* Define the number of dande to be used in the animation */
const NUMBER_OF_dande = 30;

/*
    Called when the "Falling dande" page is completely loaded.
*/
function init()
{
    /* Get a reference to the element that will contain the dande */
    var container = document.getElementById('dandeContainer');
    /* Fill the empty container with new dande */
    for (var i = 0; i < NUMBER_OF_dande; i++)
    {
        container.appendChild(createAdande());
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
    Uses an img element to create each dande. "dande.css" implements two spin
    animations for the dande: clockwiseSpin and counterclockwiseSpinAndFlip. This
    function determines which of these spin animations should be applied to each dande.

*/
function createAdande()
{
    /* Start by creating a wrapper div, and an empty img element */
    var dandeDiv = document.createElement('div');
    var image = document.createElement('img');

    /* Randomly choose a dande image and assign it to the newly created element */
    image.src = 'dandeimages/dande' + randomInteger(1, 5) + '.png';

    dandeDiv.style.top = "-100px";

    /* Position the dande at a random location along the screen */
    dandeDiv.style.left = pixelValue(randomInteger(0, 1000));

    /* Randomly choose a spin animation */
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';

    /* Set the -webkit-animation-name property with these values */
    dandeDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;

    /* Figure out a random duration for the fade and drop animations */
    var fadeAndDropDuration = durationValue(randomFloat(5, 11));

    /* Figure out another random duration for the spin animation */
    var spinDuration = durationValue(randomFloat(4, 8));
    /* Set the -webkit-animation-duration property with these values */
    dandeDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

    var dandeDelay = durationValue(randomFloat(0, 5));
    dandeDiv.style.webkitAnimationDelay = dandeDelay + ', ' + dandeDelay;

    image.style.webkitAnimationDuration = spinDuration;

    // add the <img> to the <div>
    dandeDiv.appendChild(image);

    /* Return this img element so it can be added to the document */
    return dandeDiv;
}

/* Calls the init function when the "Falling dande" page is full loaded */
window.addEventListener('load', init, false);