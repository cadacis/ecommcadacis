import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart3 = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'radar',
      },

      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June'],
      },
    },
  });
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radar"
        height={350}
      />
    </div>
  );
};

export default Chart3;
