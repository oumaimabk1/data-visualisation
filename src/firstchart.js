import Chart from 'chart.js/auto';


// Create a new div element
let ctx = document.createElement("canvas");

// Get the h1 element
let h1 = document.querySelector("h1");

// Get the parent element of the h1
let parent = h1.parentNode;

// Define the data for the chart
var data = {
    labels: [],
    datasets: [{
        label: "Live chart",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
    }]
};

// Create the chart
var myChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {}
});

setInterval(() => {
    let labels = []
    let axeY = []
    fetch('https://canvasjs.com/services/data/datapoints.php')
      .then(response => response.json())
      .then(res => {
        res.forEach(el => {
            labels.push(el[0])
            axeY.push(el[1])
        })
          myChart.data.labels = labels
          myChart.data.datasets[0].data =axeY;
          myChart.update();
      })
      .catch(error => console.error(error));
}, 1000);

parent.insertBefore(ctx, h1.nextSibling);

