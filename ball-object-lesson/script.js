/*
    BALL BOUNCE
    s.landers (2024-03-28)
    sean.landers@gmail.com

     here's how you create 5 
        or 50 
            or 500 
                or 5000 
                    or even 50000 
                        or more!
        
        independently bouncing balls 
        on an animated canvas 
*/


// waits for the entire page to load before executing
document.addEventListener('DOMContentLoaded', function() {
// create a variable called 'canvas', that inherits properties from the html
// specifically, an element called 'animationCanvas' (see index.html)     
    const canvas = document.getElementById('animationCanvas');
//create a 'rendering context'; 
//  think of it like a painter's studio, 
//      complete with canvas, brushes, oils, paints, et c.
    const ctx = canvas.getContext('2d');


// the power of variables!

    // by using 'ballNum' to define how many balls we want to create, 
    // we don't have to change the number every time it appears in the code (it appears three times);
    // we only have to change it here, and it will change in every other instance
    let ballNum = 50;

    
    /* 
        setting up a default fillValue was necessary for debugging 
        I was having trouble parsing rgb() stuff -- no longer necessary 
        so, I have commented it out -- 
            -- but kept it in, just in case I need it later
    
    //let fillValue = "rgb(255, 0, 100)";
    */

    // rather than define w/h in index.html, we can define it here
    // the canvas object has methods that let us directly adjust the width and height as follows:
    canvas.width = 400;
    canvas.height = 400;

    // a default 'ballRadius' variable;
    // it'll keep the default 'ballRadius' variable to scale with the sketch
    let ballRadius = canvas.width/40;

    /*
    by referencing .width and .height instead of 400x400, et c, 
    no matter what size we make the canvas,
    the entire page will be responsive.
    if we change it to 1920x1080 or 200x200, it should still work
    */ 

/*
        these are functions!
        a function 
        "A function in JavaScript is similar to a procedure—
        a set of statements that performs a task or calculates a value, 
        but for a procedure to qualify as a function, 
        it should take some input and return an output 
        where there is some obvious relationship 
        between the input and the output."
        
        one way to return output is with 'return'
        by putting that at the end of the function, the function 'returns' the stated value

    */

    /*
    makeRGB()
        generates a random rgb value
        we could make it RGBA() if we wanted, and we could also generate an alpha value
    */

    function makeRGB() {
        let ro = Math.round, rc = Math.random, rv = 255; 
        return 'rgb(' + ro(rc()*rv) + ',' + ro(rc()*rv) + ',' + ro(rc()*rv) + ')';
    }

    function drawBall (x, y, ballRadius, color) {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
            //console.log(fillValue);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.closePath();
    }

    /*
    moveBall()
        accepts a ballObj object

    if the x + the direction takes the ball beyond the canvas width on either side
        it reverses the horizontal motion
    if the y+ the direction takes the ball beyond the canvas height on either side
        it reverses the vertical motion

    then it increments both vertical and horizontal position by dx and dy

    then it returns the modified ballObj
    */

    function moveBall(ballObj) {
        if(ballObj.x + ballObj.dx > canvas.width - ballObj.ballRadius || ballObj.x + ballObj.dx < ballObj.ballRadius) {
            ballObj.dx = -ballObj.dx;
        }
        if(ballObj.y + ballObj.dy > canvas.height - ballObj.ballRadius || ballObj.y + ballObj.dy < ballObj.ballRadius) {
            ballObj.dy = -ballObj.dy;
        }

        // increment dx and dy by the appropriate variables to make it move
        ballObj.x += ballObj.dx;
        ballObj.y += ballObj.dy;

        return ballObj;
    }

    //      FUN WITH LOGICAL OPERATORS
        //      what's the deal with '||'?
        //      it's a logical operator -- the logical operator OR
        //      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
        //


    /*
    this is establishing an object we call BallObj
    (it is a matter of convention that objects in JavaScript receive this kind of treatment - 
    Uppercasing the name.)
        we have made a 'ball' object 
        it has attributes like 'ballRadius' or 'x' or 'y'
        it could have methods, too, if we wanted to do that - 
            but it felt less cumbersome to define those functions manually
    */

    function BallObj(startX, startY, dX, dY, radius) {
        this.ballRadius= radius;
        this.y = startY;
        this.x = startX;
        this.dx =  dX;
        this.dy = dY;
        this.color = "rgb(200, 200, 200)";

    }

    // we're establishing an 'array'
    // an array is a variable full of variables
    // (some of which can be arrays, themselves)
    // (real hat-hat recursion stuff happening there)
    // this is a simpler one
    // it will be an array we fill with BallObj objects
    const ballObj = [];

    // this is us filling up the array
    // note we use 'ballNum' here; that's how many objects we'll create
    for (let i = 0; i < ballNum; i +=1) {
        // Math.round is a method that makes a number into a round number
        // so we are only dealing with integers, not floats
        // Math.random is a method of the Math object that generates a random number between 0 and 1
        // so it'll be a float by default
        // then, we multiply that fraction by the maximum number in the range of numbers we're generating
        // then, we use Math.round to make it a whole number, so we're not fiddling with floats
        let x = Math.round(Math.random()*canvas.width);
        let y = Math.round(Math.random()*canvas.height);
        let dx = Math.round(Math.random()*2);
        let dy = Math.round(Math.random()*2);
        // error correcting code - so if we randomly generate a stationary object, we give it a little motion
        // we could also fix the dx/dy variables above, and we should
        // but this is just a prototype - 
        // so I'll leave this comment to myself in the code to remind myself to fix it later
        // FIX THIS
        if (dx <= 0) {
            dx = 1;
        }
        if (dy <= 0) {
            dy = -1;
        }

        // see above, re: code - it was generating 0 radius balls (therefore invisible)
        // FIX THIS, TOO
        let ballRadius = Math.round(Math.random()*10);
        if (ballRadius <= 5) {
            ballRadius = 5;
        }

        // so this pushes something into our array - generates a new entry, which will be in position 'i'
        // 'new' is how we say 'make a new one of these objects'
        // we store that new object in the array as a value
        // so ballObj[i] will = a BallObj with the parameters we specify
        ballObj.push(new BallObj(x, y, dx, dy, ballRadius));
        // I had this console.log() as a troubleshooting method
        // to see what the heck was going on behind the scenes
        //console.log(ballObj[i]);

        // give the ball a random color
        ballObj[i].color = makeRGB();
        
        //draw the ball for the first time on the canvas
        drawBall(ballObj[i].x, ballObj[i].y, ballObj[i].ballRadius, ballObj[i].color);
    }
    
    

    /*
        this is where we define the animation!
    */
    
    function animate() {
        // 1:  we erase the canvas
        //   by blanking out with a rectangle that goes from (0,0) to (canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // troubleshooting
        // console.log(ballObj[0].x, ballObj[0].dx, ballObj[0].y, ballObj[0].dy);
        // 2: iterate for ballNum times over ballObj, 
        //  first, drawing a ball, then using moveBall to determine what will happen next frame
        for (let i = 0; i<ballNum; i+=1) {
            drawBall(ballObj[i].x, ballObj[i].y, ballObj[i].ballRadius, ballObj[i].color);
            ballObj[i] = moveBall(ballObj[i]);
        }
        
        //troubleshooting
        //console.log(ballObj[0].x, ballObj[0].dx, ballObj[0].y, ballObj[0].dy);

        // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
        requestAnimationFrame(animate);
    }
    
    animate();
    
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


});
