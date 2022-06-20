import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart2 = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21],
      },
      {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32],
      },
      {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 200,
        stacked: true,
        stackType: '100%',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      /*   title: {
        text: '100% Stacked Bar',
      }, */
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + 'K';
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetX: 40,
      },
    },
  });
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default Chart2;
