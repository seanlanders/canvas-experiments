document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');

    let startX = 100;
    let startY = 50;

    let rectRed = 50;
    let rectGreen = 0;
    let rectBlue = 100;

    let i = 75;

    // Draw rectangle 1
    ctx.fillStyle = 'rgb(' + rectRed +","+rectGreen+","+rectBlue+')'
    ctx.fillRect(startX, startY, i, i); // fillRect(x, y, width, height)

    // Draw rectangle 2
    ctx.fillStyle = 'rgb(' + (rectRed+i) + "," + (rectGreen+i/2) + "," + (rectBlue-i) + ')'
    ctx.fillRect(startX+i, startY+i, i, i); // fillRect(x, y, width, height)

    // Draw rectangle 3
    ctx.fillStyle = 'rgb(' + (rectRed-i) + "," + (rectGreen+i) + "," + (rectBlue+i) + ')'
    ctx.fillRect(startX-i, startY+i, i, i); // fillRect(x, y, width, height)

    // Draw a circle
    ctx.beginPath();
    ctx.arc(300+i, 150, 50, 0, Math.PI*2); // arc(x, y, radius, startAngle, endAngle)
    ctx.fillStyle = 'purple';
    ctx.fill();
    ctx.strokeStyle
    //ctx.stroke();
    ctx.closePath();
    // arc works with radians, not degrees -- 
    // to convert:
    //  radians = degrees * (pi/180)
    //  degrees = radians * (180/pi)

    // Draw a line
    ctx.beginPath();
    ctx.moveTo(i, 300); // Start point
    ctx.lineTo(550, 300); // End point
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();

});
