document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');

    // valid color keywords:
    // https://www.w3.org/wiki/CSS/Properties/color/keywords

    // Draw a rectangle
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(100, 50, 150, 100); // fillRect(x, y, width, height)

    // Draw a circle
    ctx.beginPath();
    ctx.arc(300, 200, 50, 0, Math.PI*2); // arc(x, y, radius, startAngle, endAngle)
    ctx.fillStyle = 'purple';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
    // arc works with radians, not degrees -- 
    // to convert:
    //  radians = degrees * (pi/180)
    //  degrees = radians * (180/pi)

    // Draw a line
    ctx.beginPath();
    ctx.moveTo(50, 300); // Start point
    ctx.lineTo(550, 400); // End point
    ctx.strokeStyle = 'green';  // color of stroke
    ctx.lineWidth = 5; // how wide the line will be
    ctx.stroke(); // make the line
    ctx.closePath();

    // draw a triangle
    ctx.beginPath();
    ctx.moveTo(400, 100);
    ctx.lineTo(500, 200);
    ctx.lineTo(500, 75);
    ctx.fillStyle = 'maroon';
    ctx.fill();
    ctx.closePath();
});
