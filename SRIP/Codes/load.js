var data = {
	labels: [-0.7,-0.6,-0.5,-0.4,-0.3,-0.2,-0.1,0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7],
    datasets: [{ 
        data: [-0.3,-0.4,-0.2,0.3,0.4,0.6,0.7,0.2],
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
	labels: [-0.7,-0.6,-0.5,-0.4,-0.3,-0.2,-0.1,0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7],
    datasets: [{ 
        data: [0.5,-0.1,0.6,0.5,-0.1,0.6,0.4,0.2],
        label: "T2",
        borderColor:[ 
        "#8e7ea2",//class1
        "#8e7ea2",//class1
        "#8e5ea2",//class2
        "#8e5ea2",//class2
        "#3cba9f",//class3
        "#3cba9f",//class3
        "#e8c3b9",//class4
        "#e8c3b9",//class4

        ],
        fill: false
      }
    ]
};

var data3 = {
	labels: [-0.7,-0.6,-0.5,-0.4,-0.3,-0.2,-0.1,0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7],
    datasets: [ { 
        data: [0.6,-0.3,-0.4,0,0.6,-0.3,0.4,0.2],
        label: "T3",
        borderColor:[ 
        "#8e7ea2",//class1
        "#8e7ea2",//class1
        "#8e5ea2",//class2
        "#8e5ea2",//class2
        "#3cba9f",//class3
        "#3cba9f",//class3
        "#e8c3b9",//class4
        "#e8c3b9",//class4
        ],
        fill: false
      }
    ]
};

var data4 = {
	labels: [-0.7,-0.6,-0.5,-0.4,-0.3,-0.2,-0.1,0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7],
    datasets: [ { 
        data: [0.4,0.2,0.4,0.2,0.4,0.2,0.4,0.2],
        label: "T4",
        borderColor:[ 
        "#8e7ea2",//class1
        "#8e7ea2",//class1
        "#8e5ea2",//class2
        "#8e5ea2",//class2
        "#3cba9f",//class3
        "#3cba9f",//class3
        "#e8c3b9",//class4
        "#e8c3b9",//class4
        ],
        fill: false
    }
    ]
};


var ctx = document.getElementById("linechart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    showLines: false ,
     scales: {
                ticks: {
                max: 0.7,
                min: -0.7,
                stepSize: 0.1
                }
          
        },
      legend: {
         display: false,
        }
    }
});

document.getElementById('btn1').onclick = function() {
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'line',
    data: data
  });
};
document.getElementById('btn2').onclick = function() {
  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'line',
    data: data2 ,
    options: {
    showLines: false ,
     scales: {
                ticks: {
                max: 0.7,
                min: -0.7,
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
    type: 'line',
    data: data3 ,
    options: {
    showLines: false ,
     scales: {
                ticks: {
                max: 0.7,
                min: -0.7,
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
    type: 'line',
    data: data4,
    options: {
    showLines: false ,
     scales: {
                ticks: {
                max: 0.7,
                min: -0.7,
                stepSize: 0.1
                }
          
        },
      legend: {
         display: false,
        }
    }
  });
};