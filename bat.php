<html>
  <head>
    <title>Canvas Pinball flippers by stirfry</title>
    <script type="application/x-javascript">
     /*THIS SCRIPT ADAPTED BY STIRFRY. SOURCE TEETHGRINDER no warranty or liability implied or otherwise. use at your own risk. No credit required. Enjoy.stirfry.thank(you)*/
    var img = new Image();
                            //img.src = "flipper.gif";//right
    img.src="http://i39.tinypic.com/k1vq0x.gif"
    var img2 = new Image();
                             //img2.src = "flipper2.gif";//left
    img2.src ="http://i42.tinypic.com/14c8wht.gif"
    var gAngle = 0;
    gAngle = 60;
    stop = false;
    inertia = .8;
    vel = 10;
    k = 0.1;

    function drawagain(){
      gAngle = 60;
      stop = false;
      inertia = .8;
      vel = 10;
      k = 0.1;
     draw()
   }

   function draw(){
     var ctx = document.getElementById('canvas').getContext('2d');
     ctx.save();

        vel = ( vel * inertia ) + ( -gAngle * k );

        gAngle += vel;

        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.fillRect (0, 0, 600, 600);

        ctx.translate(380, 480);              //location of the system
        ctx.rotate( gAngle * Math.PI / 180 );//rotate first then draw the flipper
        ctx.drawImage(img, -105, -16);
ctx.restore();
ctx.save();
        ctx.translate(120, 480);              //location of the system
        ctx.rotate( -1*gAngle * Math.PI / 180 );//rotate first then draw the flipper
        ctx.drawImage(img2, -18, -16);

ctx.restore();

        if( !stop )
          setTimeout(draw, 30);
      }

    </script>
    <style type="text/css">
      body { margin: 20px; font-family: arial,verdana,helvetica; background: #fff;}
      h1 { font-size: 140%; font-weight:normal; color: #036; border-bottom: 1px solid #ccc; }
      canvas { border: 2px solid #000; float: left; margin-right: 20px; margin-bottom: 20px; }
      pre { float:left; display:block; background: rgb(238,238,238); border: 1px dashed #666; padding: 15px 20px; margin: 0 0 10px 0; }
      .gameLayer {position: absolute; top: 0px; left: 0px;}
      #scoreLayer {font-family: arial; color: #FF0000; left: 10px; font-size: 70%; }
      #windowcontainer {position:relative; height:300px;}
    </style>
  </head>

  <body onload="draw()">
    <div id="windowcontainer">
      <canvas id="canvas" width="500" height="500"></canvas>
      <INPUT VALUE="flip" TYPE=BUTTON onClick="drawagain();"><br/>
    </div>

  </body>
</html>