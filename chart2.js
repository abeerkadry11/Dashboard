var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [20, 39,],
            backgroundColor: [
                'rgb(238, 238, 63)',
                ' rgb(28, 21, 131)'
                
              
            ],
            borderColor: [
                'rgba(255, 255, 255, 255)',
            
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive:true
    }
});
