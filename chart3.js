window.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');

    // Create gradient for Data One
    var gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, 'rgb(238, 238, 63)'); // yollow
    gradient1.addColorStop(1, ' rgb(28, 21, 131, 0.1)'); // Transparent red

    // Create gradient for Data Two
    var gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, ' rgb(28, 21, 131)'); // Cyan
    gradient2.addColorStop(1, 'rgba(0, 255, 255, 0.7)'); // Transparent cyan

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Data One',
                    data: [0, 60, 30, 50, 30, 60, 0],
                    backgroundColor: gradient1,
                    borderColor: 'yollow',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Data Two',
                    data: [60, 20, 60, 30, 60, 30, 40],
                    backgroundColor: gradient2,
                    borderColor: 'blue',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'rgb(255, 99, 132)'
                    }
                }
            }
        }
    });
};
