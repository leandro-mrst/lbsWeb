const chartData = {
    labels: [
      "ANTIMICROBIAL (15)",
      "VIRAL (488)",
      "ENZYME (7489)",
      "MEMBRANE (204)",
      "HORMONE (231)",
      "PLANT (1239)"
    ],
    datasets: [{
      data: [15, 488, 7489, 204, 231, 1239].map(i => Math.log10(i).toFixed(2)), 
      backgroundColor: [
        '#ff7f0e', 
        '#d62728', 
        'rgb(54, 162, 235)', 
        '#5cb85c', 
        '#ff1493', 
        'rgb(150, 255, 10)' 
      ],
    }]
  };
   const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, 
    scales: { 
      r: { 
        max: 4, 
        ticks: {
          beginAtZero: false, 
          callback: function(value, index, values) {
            
            return value;
          }
        }
      }
    },
    plugins: {
      legend: {
        display: true, 
        position: 'top', 
        labels: {
            font: {
                size: 14 
            }
        }
      },
      tooltip: { 
        enabled: true,
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.r !== null) { 
              label += Math.pow(10, context.parsed.r).toFixed(0); 
            }
            return label;
          }
        }
      }
    }
  };

  export { chartData, chartOptions };