function markpoints(){ 
      $("#linechart").click(function(e){
     getPosition(e); 
     });
     }
  
  var pointSize = 3;

function getPosition(event){
     var rect = linechart.getBoundingClientRect();
     var x = event.clientX - rect.left;
     var y = event.clientY - rect.top;
        
     drawCoordinates(x,y);
}

function drawCoordinates(x,y){  
    var ctx = document.getElementById("linechart").getContext("2d");


    ctx.fillStyle = "#800080"; // color

    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
}

           
         