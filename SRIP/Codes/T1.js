var ctx = document.getElementById('line-chart');
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
        "#8e7ea2",//class1
        "#8e7ea2",//class1
        "#8e5ea2",//class2
        "#8e5ea2",//class2
        "#3cba9f",//class3
        "#e8c3b9",//class4
        "#e8c3b9",//class4
        ],
        fill: false,
         
      }
    ]
  },
  scaleSteps: 40,
  scaleStepWidth: 40,
  scaleStartValue: 0,  
  options: {
    showLines: false ,
    lineHeight: 1,
    lineWidth: 2,
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