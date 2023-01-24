import Chart from 'chart.js/auto';

// Create a new canvas element
const ctx: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement;

// Get the h1 element
const h1 = document.querySelector("h1") as HTMLHeadingElement;

// Define the data for the chart
interface ChartData {
    labels: string[],
    datasets: [{
        label: string,
        data: number[],
        backgroundColor: string,
        borderColor: string,
        borderWidth: number
    }]
}
// Define the data for the chart
var data: ChartData = {
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
const fetchData = (labels: number[], axeY: number[]) => {
    fetch('https://canvasjs.com/services/data/datapoints.php')
        .then(response => response.json())
        .then(res => {
            res.forEach((el: any) => {
                labels.push(el[0])
                axeY.push(el[1])
            })
            myChart.data.labels = labels
            myChart.data.datasets[0].data = axeY;
            myChart.update();
        })
        .catch(error => console.error(error));
}

setInterval(() => {
    let labels: number[] = []
    let axeY: number[] = []
    fetchData(labels, axeY)
}, 1000);


if (h1.parentNode) {
    h1.parentNode.insertBefore(ctx, h1.nextSibling);
}


