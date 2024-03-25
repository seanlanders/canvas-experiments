document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    let fillValue = "rgb(255, 0, 100)";
    // rather than define w/h in index.html, we can define it here
    // the canvas object has methods that let us directly adjust the width and height as follows:
    canvas.width = 400;
    canvas.height = 400;
    /*
    by referencing these variables instead of 400x400, et c, 
    no matter what size we make the canvas,
    the entire page will be responsive.
    if we change it to 1920x1080 or 200x200, it should still work
    */ 

    /*
    this is establishing all the relevant features of the ball
        we could have made a 'ball' object 
        it would have attributes like 'ballRadius' or 'x' or 'y'
    and it would have methods - like some of the functions we define below
    */
    const ballRadius = 10;
    let x = canvas.width / 2;
    let y = canvas.height - 300;
    let dx = 2;
    let dy = 2;

    /*
    the variables 'x' and 'y': the starting position
    what do 'dx' and 'dy' control?

    to see it for yourself,
        make modifications!
        reload the page over and over!
        modify again!

    /*
        this is a function!
        a function 
        "A function in JavaScript is similar to a procedure—
        a set of statements that performs a task or calculates a value, 
        but for a procedure to qualify as a function, 
        it should take some input and return an output 
        where there is some obvious relationship 
        between the input and the output."
        
        by that standard, this is a poor function - 
        it accepts no input, accepts no output (not really)
        (in a future lesson, I'll show you how to zhuzh it up)

        the chief virtue of making this a function is 
         it keeps us from cluttering up the animate() function (shown below)
    */
    function drawBall(colorValue) {
        let R, G, B;
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        //console.log(fillValue);
        ctx.fillStyle = colorValue;
        ctx.fill();
        ctx.closePath();
    }
    /*
        what does the function drawBall() do, though?
        how does it work?
        and once you understand that -- 
            what OTHER cool things could we make it do?
    */


    /*
        this is where we define the animation!
    */
    function animate(colorValue) {
        // 1:  we erase the canvas
        //   by blanking out with a rectangle that goes from (0,0) to (canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 2:  execute the drawBall() function; provide an rgb value (or a variable with an rgb value)
        drawBall(colorValue);
        
        // 3:  this is where we make the sketch dynamic
        // 3a: a conditional!
        //      if in the next frame the ball would go outside the sketch's width
        //          then reverse the direction of the ball's x dimension
        //      if in the next frame the ball would go outside the sketches' height dimension:
        //          then reverse the direction of the ball's y dimension
        //
        //      FUN WITH LOGICAL OPERATORS
        //      what's the deal with '||'?
        //      it's a logical operator -- the logical operator OR
        //      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
        //
        if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }

        // increment dx and dy by the appropriate variables to make it move
        x += dx;
        y += dy;


        // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
        requestAnimationFrame(animate);
    }

    /* 
        didn't we already do this?
        NO!
        we just DEFINED the function animate();
        but in order for it to execute,
        we have to actually USE it

        three frogs are on a log
        one of them decides to jump
        how many frogs are on the log?
        THREE! he only DECIDED to jump
        
        writing the function is like deciding
        actually invoking the function is like jumping off the log

        but then, because of RECURSION, 
            when we run the code,
            then it invokes the code
            so then we run the code
    */      
    
    animate();

});
