document.addEventListener('DOMContentLoaded', function () {
  const rows = document.querySelectorAll('#data-table tbody tr');
  const chartContainer = document.getElementById('chart-container');

  rows.forEach((row) => {
    row.addEventListener('click', function () {
      const values = JSON.parse(this.getAttribute('data-values'));

      Highcharts.chart(chartContainer, {
        chart: {
          type: 'line',
        },
        title: {
          text: 'Values from Selected Row',
        },
        xAxis: {
          categories: ['Value 1', 'Value 2', 'Value 3'],
        },
        yAxis: {
          title: {
            text: 'Values',
          },
        },
        series: [
          {
            name: 'Data',
            data: values,
          },
        ],
      });
    });
  });
});
