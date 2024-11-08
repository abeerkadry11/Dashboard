var ctx = document.getElementById('barChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'JUNE', 'JULY' , 'AUG','SEP'  ],
        datasets: [{
            label: '# of Votes',
            data: [20, 39, 29, 20, 32, 22, 15, 35, 30, 25, 42,20, 35, 25, 28, 20, 30],
            backgroundColor: [
                'rgb(238, 238, 63)',
                ' rgb(28, 21, 131)'
                
              
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive:true
    }
});