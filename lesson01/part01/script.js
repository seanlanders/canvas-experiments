// addEventListener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// "sets up a function that will be called whenever the specified event is delivered to the target"
//
// DOMContentLoaded: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// DOM = Document Object Model: https://www.w3schools.com/js/js_htmldom.asp
// we use the DOMContentLoaded event to make sure the HTML is fully loaded before running the script

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        // Draw a rectangle
        ctx.fillStyle = 'rgb(0, 0, 255)'; // Blue color
        ctx.fillRect(10, 10, 100, 100); // Draws a rectangle (x, y, width, height)

        // Draw a circle
        ctx.beginPath();
        ctx.arc(300, 160, 50, 0, Math.PI * 2, true); // arc(x, y, radius, startAngle, endAngle, anticlockwise)
        ctx.fillStyle = 'rgb(255, 0, 0)'; // Red color
        ctx.fill();
    } else {
        console.log('Your browser does not support the canvas element.');
    }
});
