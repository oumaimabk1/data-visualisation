import Chart from 'chart.js/auto';

/************chart n1 table 1 */ 


// Create a new div element
let ctx = document.createElement("canvas");
ctx.height = 200
// Get the h1 element
let tableOne = document.querySelector("#table1");

// Get the parent element of the h1
let parentTable = tableOne.parentNode;


//récupérer les années
let years = document.querySelectorAll('#table1 tbody tr th:not(:has(div)):not(:empty):not([dir=atr])')
let labelYears =[]
years.forEach((el,i) => {
  if(i>0){
    labelYears.push(el.innerHTML)
  }
   
})
//récuperer les statics de cahque pays
let countries = document.querySelectorAll('#table1 tbody tr:has(td)')
//fonction pour les couleurs aléatoires
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

let colors = []
for(let i=0; i<35;i++){
  colors.push(getRandomColor())
}

let datasets = []
countries.forEach((el,i )=>{
  let contry = '';
  let values = [];
  var tdElements = el.querySelectorAll("td");
  tdElements.forEach((tdel,i) =>{
    if(i === 0){
      contry = tdel.innerHTML
    }else{
      values.push(parseInt(tdel.innerHTML.replace(",",".")));
    }   
  })
  datasets.push({
    label: contry,
    data: values,
    backgroundColor:colors[i],
    borderColor: colors[i],
    borderWidth: 1
})
})

var data = {
    labels: labelYears,
    datasets:  datasets
};

var options = {
    stacked: true
};

var myChart2 = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
});

/*
var chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "country",
        data:  [146,9, 143,9, 142,1, 137,8, 136,4, 134,7, 126,7, 138,1, 147,0, 128,6, 120,6],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      
      },
      {
        label: "Expenses",
        data:  [1012,8, 1007,8, 1013,7, 999,4, 1022,8, 1034,4, 1043,6, 1067,3, 1072,0, 1111,0, 1073,8],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 1)",
      
      }
    ]
  },
  options: {
    stacked: true
  }
});*/



parentTable.insertBefore(ctx, tableOne);
