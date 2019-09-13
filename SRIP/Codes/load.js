var data = {
    datasets: [{ 
        data: [
        {
            x: 0.3,
            y: 0.20
         }, {
            x: 0.4,
            y: 0.30
         }, {
            x: -0.4,
            y: -0.30
         }, {
            x: -0.3,
            y: -0.20
         },
         {
            x: 0.2,
            y: -0.4
         },{
            x: 0.3,
            y: -0.20
         }, {
            x: 0.7,
            y: 0.30
         }, {
            x: -0.4,
            y: 0.60
         }],
        showLine: false,
        backgroundColor:[ 
        "red",//class1
        "red",//class1
        "blue",//class2
        "blue",//class2
        "green",//class3
        "green",//class3
        "black",//class4
        "black",//class4
        ],
       fill: false,
         
      }
    ]
};
       
var data2 = {
	 datasets: [{ 
         data: [
        {
            x: 0.4,
            y: 0.50
         }, {
            x: 0.6,
            y: 0.80
         }, {
            x: -0.8,
            y: -0.70
         }, {
            x: -0.6,
            y: -0.80
         },
         {
            x: 0.2,
            y: -0.4
         },{
            x: 0.3,
            y: -0.20
         }, {
            x: -0.7,
            y: -0.30
         }, {
            x: -0.6,
            y: -0.40
         }],
        label: "T2",
        backgroundColor:[ 
         "red",//class1
        "red",//class1
        "blue",//class2
        "blue",//class2
        "green",//class3
        "green",//class3
        "black",//class4
        "black",//class4
        ],
        fill: false
      }
    ]
};

var data3 = {
	 datasets: [ { 
         data: [
        {
            x: 0.1,
            y: 0.20
         }, {
            x: 0.3,
            y: 0.20
         }, {
            x: -0.5,
            y: -0.50
         }, {
            x: -0.6,
            y: -0.60
         },
         {
            x: -0.2,
            y: -0.4
         },{
            x: -0.3,
            y: -0.20
         }, {
            x: -0.2,
            y: -0.30
         }, {
            x: -0.4,
            y: -0.30
         }],
        label: "T3",
        backgroundColor:[ 
         "red",//class1
        "red",//class1
        "blue",//class2
        "blue",//class2
        "green",//class3
        "green",//class3
        "black",//class4
        "black",//class4
        ],
        fill: false
      }
    ]
};

var data4 = {
	  datasets: [ { 
         data: [
        {
            x: -0.2,
            y: -0.20
         }, {
            x: -0.4,
            y: -0.30
         }, {
            x: 0.4,
            y: 0.30
         }, {
            x: 0.3,
            y: 0.20
         },
         {
            x: -0.2,
            y: -0.4
         },{
            x: -0.3,
            y: -0.20
         }, {
            x: 0.7,
            y: 0.30
         }, {
            x: 0.4,
            y: 0.60
         }],
        label: "T4",
        backgroundColor:[ 
         "red",//class1
        "red",//class1
        "blue",//class2
        "blue",//class2
        "green",//class3
        "green",//class3
        "black",//class4
        "black",//class4
        ],
        fill: false
    }
    ]
};

var datasetno=1;
var ctx = document.getElementById("linechart");
var myChart = new Chart(ctx, {
  type: 'scatter',
  data: data,
  options: {
    showLines: false ,
    responsive: true,
    scales: {
                ticks: {
                max: 10.0,
                min: -10.0,
                stepSize: 0.1
                },
          
        },
      legend: {
         display: false,
        },

    }
});

document.getElementById('btn1').onclick = function() {
  datasetno=1;
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'scatter',
    data: data,
    options: {
    showLines: false ,
     scales: {
                 ticks: {
                max: 10.0,
                min: -10.0,
                stepSize: 0.1
                }
          
        },
      legend: {
         display: false,
        }
    }

  });
  document.getElementById("next").disabled = false;
};
document.getElementById('btn2').onclick = function() {
  datasetno=2;
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'scatter',
    data: data2 ,
    options: {
    showLines: false ,
     scales: {
                 ticks: {
                max: 10.0,
                min: -10.0,
                stepSize: 0.1
                }
          
        },
      legend: {
         display: false,
        }
    }
  });
  document.getElementById("next").disabled = false;
};
document.getElementById('btn3').onclick = function() {
 datasetno=3;
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'scatter',
    data: data3 ,
    options: {
    showLines: false ,
     scales: {
                 ticks: {
                max: 10.0,
                min: -10.0,
                stepSize: 0.1
                }
          
        },
      legend: {
         display: false,
        }
    }
  });
  document.getElementById("next").disabled = false;
};
document.getElementById('btn4').onclick = function() {
  datasetno=4;
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'scatter',
    data: data4,
    options: {
    showLines: false ,
     scales: {
                 ticks: {
                max: 10.0,
                min: -10.0,
                stepSize: 0.1
                }
          
        },
      legend: {
         display: false,
        }
    }
  });
  document.getElementById("next").disabled = false;
};
document.getElementById('btn5').onclick = function() {
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'scatter',
    data: data,
    options: {
        showLines: false ,
        scales: {
                 ticks: {
                max: 10.0,
                min: -10.0,
                stepSize: 0.1
                }
        },
        legend: {
           display: false,
        }
    }
  });
  document.getElementById("next").disabled = false;
};

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
    //alert("x="+x+" y="+y);
  var class1=0,class2=0,class3=0,class4=0;
  var dis11=0,dist12=0,dist21=0,dist22=0,dis31=0,dist32=0,dist41=0,dist42=0,min1=0,min2=0;
  var x11,y11,x12,y12,x21,y21,x22,y22,x31,y31,x32,y32,x41,y41,x42,y42;
  var isclassified=0; 
  var classifier=document.getElementById('classifier');
  classifier.value=" ";
  var currentclass=document.getElementById('currentclass');
  currentclass.value=" ";
     if(datasetno==1){
       x11=305.46875;y11=147.5625;
       x12=272.46875;y12=186.5625;
       x21=71.46875;y21=341.5625;
       x22=37.46875;y22=381.5625;
       x31=273.46875;y31=341.5625;
       x32=237.46875;y32=419.5625;
       x41=405.46875;y41=147.5625;
       x42=36.46875;y42=31.5625;
       dist11=Math.sqrt(Math.pow(x-x11,2)+Math.pow(y-y11,2));
       dist12=Math.sqrt(Math.pow(x-x12,2)+Math.pow(y-y12,2));
       dist41=Math.sqrt(Math.pow(x-x41,2)+Math.pow(y-y41,2));
       dist42=Math.sqrt(Math.pow(x-x42,2)+Math.pow(y-y42,2));
       dist21=Math.sqrt(Math.pow(x-x21,2)+Math.pow(y-y21,2));
       dist22=Math.sqrt(Math.pow(x-x22,2)+Math.pow(y-y22,2));
       dist31=Math.sqrt(Math.pow(x-x31,2)+Math.pow(y-y31,2));
       dist32=Math.sqrt(Math.pow(x-x32,2)+Math.pow(y-y32,2));
     }
     if(datasetno==2){
       x11=438.46875;y11=5.5625;
       x12=382.46875;y12=84.5625;
       x21=37.46875;y21=392.5625;
       x22=93.46875;y22=419.5625;
       x31=323.46875;y31=315.5625;
       x32=353.46875;y32=262.5625;
       x41=95.46875;y41=315.5625;
       x42=65.46875;y42=290.5625;
       dist11=Math.sqrt(Math.pow(x-x11,2)+Math.pow(y-y11,2));
       dist12=Math.sqrt(Math.pow(x-x12,2)+Math.pow(y-y12,2));
       dist41=Math.sqrt(Math.pow(x-x41,2)+Math.pow(y-y41,2));
       dist42=Math.sqrt(Math.pow(x-x42,2)+Math.pow(y-y42,2));
       dist21=Math.sqrt(Math.pow(x-x21,2)+Math.pow(y-y21,2));
       dist22=Math.sqrt(Math.pow(x-x22,2)+Math.pow(y-y22,2));
       dist31=Math.sqrt(Math.pow(x-x31,2)+Math.pow(y-y31,2));
       dist32=Math.sqrt(Math.pow(x-x32,2)+Math.pow(y-y32,2));
     }
     if(datasetno==3){
       x11=350.46875;y11=5.5625;
       x12=439.46875;y12=6.5625;
       x21=81.46875;y21=368.5625;
       x22=37.46875;y22=419.5625;
       x31=172.46875;y31=212.5625;
       x32=216.46875;y32=314.5625;
       x41=125.46875;y41=263.5625;
       x42=214.46875;y42=263.5625;
       dist11=Math.sqrt(Math.pow(x-x11,2)+Math.pow(y-y11,2));
       dist12=Math.sqrt(Math.pow(x-x12,2)+Math.pow(y-y12,2));
       dist41=Math.sqrt(Math.pow(x-x41,2)+Math.pow(y-y41,2));
       dist42=Math.sqrt(Math.pow(x-x42,2)+Math.pow(y-y42,2));
       dist21=Math.sqrt(Math.pow(x-x21,2)+Math.pow(y-y21,2));
       dist22=Math.sqrt(Math.pow(x-x22,2)+Math.pow(y-y22,2));
       dist31=Math.sqrt(Math.pow(x-x31,2)+Math.pow(y-y31,2));
       dist32=Math.sqrt(Math.pow(x-x32,2)+Math.pow(y-y32,2));
     }
     if(datasetno==4){
       x11=104.46875;y11=338.5625;
       x12=38.46875;y12=377.5625;
       x21=306.46875;y21=130.5625;
       x22=272.46875;y22=170.5625;
       x31=70.46875;y31=336.5625;
       x32=104.46875;y32=419.5625;
       x41=405.46875;y41=129.5625;
       x42=304.46875;y42=6.5625;
       dist11=Math.sqrt(Math.pow(x-x11,2)+Math.pow(y-y11,2));
       dist12=Math.sqrt(Math.pow(x-x12,2)+Math.pow(y-y12,2));
       dist41=Math.sqrt(Math.pow(x-x41,2)+Math.pow(y-y41,2));
       dist42=Math.sqrt(Math.pow(x-x42,2)+Math.pow(y-y42,2));
       dist21=Math.sqrt(Math.pow(x-x21,2)+Math.pow(y-y21,2));
       dist22=Math.sqrt(Math.pow(x-x22,2)+Math.pow(y-y22,2));
       dist31=Math.sqrt(Math.pow(x-x31,2)+Math.pow(y-y31,2));
       dist32=Math.sqrt(Math.pow(x-x32,2)+Math.pow(y-y32,2));
     }
     document.getElementById('start').onclick = function() {
       class1=0;class2=0;class3=0;class4=0;
       classifier.value=" 1 vs 4";
       min1=Math.min(dist11,dist12);
       min2=Math.min(dist41,dist42);
      
       if(min1>min2){class4=1;currentclass.value="Not 1";}
       else{class1=1; currentclass.value=" Not 4";}
       };
      
       document.getElementById('next').onclick = function() {
       if(class1==1){
           class1=0;class2=0;class3=0,class4=0;
           classifier.value="1 vs 3";
           min1=Math.min(dist11,dist12);
           min2=Math.min(dist31,dist32);
           if(min1>min2){
            class3=1;
            currentclass.value="Not 1";
            document.getElementById('next').onclick = function(){
            classifier.value="2 vs 3";
            min1=Math.min(dist21,dist22);
            min2=Math.min(dist31,dist32);
            if(min1>min2){
                currentclass.value="classified as class 3";
                isclassified=1; 
            }
            else{
                currentclass.value="classified as class 2";
                isclassified=1; 
            }
             if(isclassified==1){ 
               document.getElementById("next").disabled = true;
              }
            }//next end   
            }

           else{
            class1=1;
            currentclass.value=" Not 3";
            document.getElementById('next').onclick = function() {
            classifier.value="1 vs 2";
            min1=Math.min(dist11,dist12);
            min2=Math.min(dist21,dist22);
            if(min1>min2){
                currentclass.value="classified as class 2";
                isclassified=1; 
            }
            else{
                currentclass.value="classified as class 1";
                isclassified=1; 
            }
            if(isclassified==1){ 
               document.getElementById("next").disabled = true;
             }
           }//end of next
           }
       }
       if(class4==1){
           classifier.value="2 vs 4";
           min1=Math.min(dist21,dist22);
           min2=Math.min(dist41,dist42);
           if(min1>min2){
            class4=1;
            currentclass.value="Not 2";
            document.getElementById('next').onclick = function() {
            classifier.value="3 vs 4";
            min1=Math.min(dist31,dist32);
            min2=Math.min(dist41,dist42);
            if(min1>min2){
                currentclass.value="classified as class 4";
                isclassified=1; 
            }
            else{
                currentclass.value="classified as class 3";
                isclassified=1; 
            }
            if(isclassified==1){ 
               document.getElementById("next").disabled = true;
            }
            }//end of next
            }
           else{
            class2=1;
            currentclass.value=" Not 4";
            document.getElementById('next').onclick = function() {
            classifier.value="2 vs 3";
            min1=Math.min(dist21,dist22);
            min2=Math.min(dist31,dist32);
            if(min1>min2){
                currentclass.value="classified as class 3";
                isclassified=1; 
            }
            else{
                currentclass.value="classified as class 2";
                isclassified=1; 
            }
            if(isclassified==1){ 
               document.getElementById("next").disabled = true;
            }
            }//end of next
           }
       }
      
       };
}

function drawCoordinates(x,y){  
    var ctx = document.getElementById("linechart").getContext("2d");


    ctx.fillStyle = "#800080"; // color

    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
}