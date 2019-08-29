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
        label: "T1",
        showLine: false,
        borderColor:[ 
        "red",//class1
        "red",//class1
        "blue",//class2
        "blue",//class2
        "green",//class3
        "green",//class3
        "yellow",//class4
        "yellow",//class4
        ],
       // fill: false,
         
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
            y: -0.70
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
        borderColor:[ 
         "red",//class1
        "red",//class1
        "blue",//class2
        "blue",//class2
        "green",//class3
        "green",//class3
        "yellow",//class4
        "yellow",//class4
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
        borderColor:[ 
         "red",//class1
        "red",//class1
        "blue",//class2
        "blue",//class2
        "green",//class3
        "green",//class3
        "yellow",//class4
        "yellow",//class4
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
        borderColor:[ 
         "red",//class1
        "red",//class1
        "blue",//class2
        "blue",//class2
        "green",//class3
        "green",//class3
        "yellow",//class4
        "yellow",//class4
        ],
        fill: false
    }
    ]
};


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
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'scatter',
    data: data
  });
};
document.getElementById('btn2').onclick = function() {
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
};
document.getElementById('btn3').onclick = function() {
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
};
document.getElementById('btn4').onclick = function() {
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
};