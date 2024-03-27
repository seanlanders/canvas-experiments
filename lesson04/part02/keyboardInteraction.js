document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('interactiveCanvas');
    const ctx = canvas.getContext('2d');

    let squareSize = 50;
    let x = canvas.width / 2 - squareSize / 2;
    let y = canvas.height / 2 - squareSize / 2;
    const moveSpeed = 10;

    // Draw the initial square
    function drawSquare() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.fillStyle = 'blue';
        ctx.fillRect(x, y, squareSize, squareSize);
    }

    drawSquare(); // Draw the square for the first time

    // Update the square's position based on keyboard input
    function moveSquare(event) {
        switch (event.key) {
            case 'ArrowUp':
                y -= moveSpeed;
                break;
            case 'ArrowDown':
                y += moveSpeed;
                break;
            case 'ArrowLeft':
                x -= moveSpeed;
                break;
            case 'ArrowRight':
                x += moveSpeed;
                break;
        }
        drawSquare(); // Redraw the square at its new position
    }

    // Listen for keyboard events
    document.addEventListener('keydown', moveSquare);
});
