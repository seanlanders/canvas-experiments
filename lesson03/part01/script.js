document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');

    // This variable determines whether to draw a circle or not
    let drawCircle = true;

    // Check the drawCircle flag and draw if it's true
    if (drawCircle) {
        ctx.beginPath(); // Begin a new path for the circle
        ctx.arc(200, 200, 50, 0, Math.PI * 2); // Define a circle path
        ctx.fillStyle = 'blue'; // Set the fill color
        ctx.fill(); // Fill the circle with color
        ctx.closePath(); // Close the path
    } else {
        // If drawCircle is false, draw something else instead
        // Set the fill color for the shape
        // Draw a shape
    }
});
