
import Chart from 'chart.js/auto';

// Create a new canvas element
const ctx = document.createElement("canvas") as HTMLCanvasElement;
ctx.height = 200;

// Get the table element
const tableOne = document.querySelector("#table1") as HTMLTableElement;

// Get the parent element of the table
const parentTable = tableOne.parentNode as HTMLElement;
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

const getRandomColor = (): string => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
const extractValues = (cell: HTMLTableCellElement): number => {
  return parseInt(cell.innerHTML.replace(",", "."));
}

// Get the years
const years = Array.from(tableOne.querySelectorAll('#table1 tbody tr th:not(:has(div)):not(:empty):not([dir=atr])') as NodeListOf<HTMLTableElement>);
const labelYears = years.slice(1).map((el) => el.innerHTML);
// Get the statistics for each country
const countries = Array.from(tableOne.querySelectorAll('#table1 tbody tr:has(td)') as NodeListOf<HTMLTableRowElement>);


const datasets: Datasets[] = countries.map(el => {
    const [,...values] = Array.from(el.querySelectorAll("td") as NodeListOf<HTMLTableCellElement>).map((tdel) => extractValues(tdel));
    const country: string = (el.querySelector("td") as HTMLTableCellElement).innerHTML;//il va selectionner la premiere
    return {
        label: country,
        data: values,
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        borderWidth: 1,
    };
});


const data: ChartData = {
    labels: labelYears,
    datasets,
};

const options: any = {
    stacked: true,
};

new Chart(ctx, {
    type: "line",
    data,
    options: options,
});

parentTable.insertBefore(ctx, tableOne);


