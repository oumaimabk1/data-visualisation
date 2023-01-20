import Chart from 'chart.js/auto';
import { RadialBarChart } from '@toast-ui/chart';

// Create a new div element
let ctx = document.createElement("canvas");
ctx.height = 200
// Get the h1 element
let tabletow = document.querySelector("#table2");

// Get the parent element of the tabletow
let parent = tabletow.parentNode;


// Create an array to store the values of the second column
var secondColumn = [];
var thirdColumn = [];
var fourthColumn = [];

// Loop through the rows of the table
for(var i = 0; i < tabletow.rows.length; i++) {
    
  // Get the second cell of the current row
  var secondCell = tabletow.rows[i].cells[1];
  var thirdCell = tabletow.rows[i].cells[2];
  var fourthCell = tabletow.rows[i].cells[3];
  // Get the value of the second cell
  var cellValue2 = secondCell.innerHTML;
  var cellValue3 = thirdCell.innerHTML;
  var cellValue4 = fourthCell.innerHTML;
  // Add the value to the array
  secondColumn.push(cellValue2);
  thirdColumn.push(cellValue3);
  fourthColumn.push(cellValue4);
}

console.log(secondColumn);
console.log(thirdColumn);
console.log(fourthColumn);
// Create the chart
let label = secondColumn.shift()
let label2 = thirdColumn.shift()
let label3 = fourthColumn.shift()


var chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: secondColumn,
        datasets: [{
            label: label2,
            data: thirdColumn,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
        },
        {
            label:label3,
            data: fourthColumn,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
        }]
    },
    options: {}
    });

parent.insertBefore(ctx, tabletow);
tabletow.parentNode.insertBefore(ctx, tabletow)


