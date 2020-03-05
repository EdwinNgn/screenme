const Chart = require('chart.js');
const ctx = document.getElementById('pieChart');

if (ctx){
  var genresType = [];
  var genresCount = [];
  const genresJson = JSON.parse(ctx.dataset.genres);
  for (const property in genresJson) {
    genresType.push(property);
    genresCount.push(genresJson[property]);
  };
  const myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: genresType,
      datasets: [{
        backgroundColor: ["#003f5c", "#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600"],
        data: genresCount,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Most type of movie seen',
        fontSize:20
      }
    }
  });
}










