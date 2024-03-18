document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');

/* uncomment to draw a rectangle
    // Draw a rectangle
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(100, 50, 150, 100); // fillRect(x, y, width, height)
and uncomment this one, too */

/* uncomment to draw a circle
    // Draw a circle
    ctx.beginPath();
    ctx.arc(300, 150, 50, 0, Math.PI*2); // arc(x, y, radius, startAngle, endAngle)
    ctx.fillStyle = 'coral';
    ctx.fill();
    ctx.strokeStyle
    //ctx.stroke();
    ctx.closePath();
    // arc works with radians, not degrees -- 
    // to convert:
    //  radians = degrees * (pi/180)
    //  degrees = radians * (180/pi)
and uncomment this one, too */

/* uncomment to draw a line
    // Draw a line
    ctx.beginPath();
    ctx.moveTo(50, 300); // Start point
    ctx.lineTo(550, 300); // End point
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
and uncomment this one, too */

});
