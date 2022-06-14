import React from 'react';
import ReactApexChart from 'react-apexcharts';
const Chart = () => {
  const [data, setData] = React.useState({
    series: [44, 55, 41],
    options: {
      chart: {
        type: 'radialBar',
      },
      legend: {
        position: 'bottom',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });
  return (
    <div>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="radialBar"
        height={300}
      />
    </div>
  );
};

export default Chart;
