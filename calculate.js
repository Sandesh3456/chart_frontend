// import Chart from 'chart.js/auto'


import myJson from './data.json' assert {type: 'json'};
console.log(myJson);

new Chart(
    document.getElementById('chart_1'),
    {
        type: 'bar',
        data: {
        labels: myJson.map(row => row.day),
        datasets: [
            {
            data: myJson.map(row => row.amount),
            }
        ]
        }
    }
);

        









































