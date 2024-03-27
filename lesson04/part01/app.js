document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e); // This allows the drawing to happen as soon as the mouse is clicked.
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath(); // This begins a new path to prevent continuous drawing when the mouse moves without being clicked.
    }

    function draw(e) {
        if (!painting) return; // Stops the function if the mouse is not clicked.
        ctx.lineWidth = 5; // Width of the drawing line.
        ctx.lineCap = 'round'; // Sets the style of the line end.

        // Draws the line to the current mouse position.
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath(); // Begins a new path to prevent the line from connecting to previous positions.
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    // Event listeners for mouse movements and actions.
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
});
