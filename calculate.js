import myJson from './data.json' assert {type: 'json'};
console.log(myJson);
var barColors = ["hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)","hsl(186, 34%, 60%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"];
new Chart(
    document.getElementById('chart_1'),
    {
        type: 'bar',
        data: {
        labels: myJson.map(row => row.day),
        datasets: [
            {
            backgroundColor: barColors,
            data: myJson.map(row => row.amount),
            }
        ]
        }
    }
);
let sum = (prev, cur) => {
    return prev + cur;
  }
// const arr= JSON.parse(myJson);
// const arrSum = arr.map(row => row.marks);
console.log("abc")
const arrSum = myJson.map(row => row.amount);
const result = arrSum.reduce(sum, 0);
console.log(arrSum);
document.getElementById("month_amount").innerHTML=result;
        









































