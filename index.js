document.addEventListener('DOMContentLoaded', function () {
  const rows = document.querySelectorAll('tr[data-values]');
  let chart;

  const initChart = (data) => {
    chart = Highcharts.chart('chart-container', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Динамика показателей',
      },
      xAxis: {
        categories: ['Текущий день', 'Вчера', 'Этот день недели'],
      },
      yAxis: {
        title: {
          text: 'Значения',
        },
      },
      series: [
        {
          name: 'Показатель',
          data: data,
        },
      ],
    });
  };

  const updateChart = (data) => {
    chart.series[0].setData(data);
  };

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td:not(:first-child):not(.today)');
    const dataValues = JSON.parse(row.getAttribute('data-values'));

    cells.forEach((cell, index) => {
      const shouldApplyChange = Math.random() > 0.5;

      if (shouldApplyChange) {
        const randomPercentage = (Math.random() * 20 - 10).toFixed(2);
        const isPositive = randomPercentage >= 0;
        const backgroundColor = isPositive ? '#d4edda' : '#f8d7da';
        const sign = isPositive ? '+' : '';

        cell.style.backgroundColor = backgroundColor;
        cell.innerHTML = `${dataValues[index]} (${sign}${randomPercentage}%)`;
      } else {
        cell.innerHTML = `${dataValues[index]}`;
      }
    });

    row.addEventListener('click', () => {
      const clickedData = JSON.parse(row.getAttribute('data-values'));
      updateChart(clickedData);
    });
  });

  const firstRowData = JSON.parse(rows[0].getAttribute('data-values'));
  initChart(firstRowData);
});
