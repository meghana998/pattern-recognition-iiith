var ctx = document.getElementById('linechart');
var myChart = new Chart(ctx, {
  type: 'line',
  scaleOverride: true,
  data: {
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
  }, 
  options: {
    showLines: false ,
     scales: {
                ticks: {
                max: 0.7,
                min: -0.7,
                stepSize: 0.1
                },
        },
      legend: {
    display: false,
          }
  }
});