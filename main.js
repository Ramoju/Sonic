(function() {
    var canvas = document.getElementById("mainCanvas");
    var stopbtn = document.getElementById("stopbtn");
    var restartbtn = document.getElementById("restartbtn");
    var colorarray = ["red", "green", "yellow", "violet", "blue"];
    var ctx = canvas.getContext("2d");
    var x = canvas.width/2;
    var y = canvas.height/2;
    var dx = 2;
    var dy = -2;

    function drawRect() {
        ctx.beginPath();
        ctx.fillRect(x, y, 20,20);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawRect();
        
        if(x + dx > canvas.width-10 || x + dx < 10) {
            var randomcolor = Math.floor(Math.random() * colorarray.length);
            ctx.fillStyle = colorarray[randomcolor];
            dx = -dx;
        }
        if(y + dy > canvas.height-10 || y + dy < 10) {
            var randomcolor = Math.floor(Math.random() * colorarray.length);
            ctx.fillStyle = colorarray[randomcolor];
            dy = -dy;
        }
        x += dx;
        y += dy;
    }
    
    stopbtn.addEventListener("click", function() {
        console.log('stop clicked');
        clearInterval(interval);
    },false);

    restartbtn.addEventListener("click", function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.location.reload();
    },false);
   
    var interval = setInterval(draw, 20);

    // your code will start here...
    //console.log('main.js loaded'); // ...and end here
    }())