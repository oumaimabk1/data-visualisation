import Chart from 'chart.js/auto';

// Create a new canvas element
const ctx: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement;
ctx.height = 200;

// Get the table element
const table: HTMLTableElement = document.querySelector("#table2") as HTMLTableElement;

// Get the parent element of the table
const parent: HTMLElement = table.parentNode as HTMLElement;

interface Datasets {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
}
interface ChartData {
    labels: string[],
    datasets: Datasets[]
}


// Function to extract the values from a table cell
const extractValues = (cell: HTMLTableCellElement): number => {
    return parseInt(cell.innerHTML.replace(",","."));
}

// Convert the rows to an array and extract the values
const rows = Array.from(table.rows);
console.log(rows)
const [, ...secondColumn] = rows.map(row => row.cells[1].innerHTML);
const [label2,...thirdColumn] = rows.map(row => extractValues(row.cells[2]));
const [label3,...fourthColumn] = rows.map(row => extractValues(row.cells[3]));

// Create the chart data
const datachart: ChartData = {
    labels: secondColumn,
    datasets: [{
        label: label2.toString(),
        data: thirdColumn,
        backgroundColor: `rgba(255, 99, 132, 0.2)`,
        borderColor: `rgba(255, 99, 132, 1)`,
        borderWidth: 1
    }, {
        label: label3.toString(),
        data: fourthColumn,
        backgroundColor: `rgba(54, 162, 235, 0.2)`,
        borderColor: `rgba(54, 162, 235, 1)`,
        borderWidth: 1
    }]
};

// Create the chart
new Chart(ctx, {
    type: "bar",
    data: datachart,
    options: {}
});

// Add the chart to the page
parent.insertBefore(ctx, table);