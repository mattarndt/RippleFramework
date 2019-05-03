/* A framework created by Matthew Arndt*/

//this looks for all classes that have rippleJs in the class name
var o = document.getElementsByClassName("rippleJs");
var i;
//runs the ripple function for every element that has rippleJs in the class name
for (i = 0; i < o.length; i++) {
    Ripple(o[i]);
}
/**
 * Adds Ripple effect to objects 
 * @param {Object}  o - object we want to add ripple effect to
 */
"use strict"

function Ripple(obj) {
    
    //Set defaults 
    var duration = 500;
    var color = 'rgba(255,255,255,0.5)';
    //add an click event to objects
    obj.addEventListener('click', function (e) {
        // Set up the ripple circle
        var circle = document.createElement('div');
        circle.classList.add('RippleEffect');
        circle.style.backgroundColor = color;
        //Animation duration for all browser types
        circle.style.WebkitAnimationDuration = duration + 'ms';
        circle.style.MozAnimationDuration = duration + 'ms';
        circle.style.animationDuration = duration + 'ms';

        //Get the largest length of obj, because we want the circle to ripple to the edges
        var diameter = Math.max(obj.clientWidth, obj.clientHeight);
        //Set the size of the circle
        circle.style.width = diameter + 'px';
        circle.style.height = diameter + 'px';

        //Set position of circle, e gives us the place that the the client clicked
        circle.style.left = e.clientX - obj.offsetLeft - (diameter / 2) + 'px';
        circle.style.top = e.clientY - obj.offsetTop - (diameter / 2) + 'px';
        //Add the circle to the button
        obj.appendChild(circle);

        //Make sure the circle gets removed after the animation is done
        setTimeout(function () {
            obj.removeChild(circle);
        }, duration);
    });
}

