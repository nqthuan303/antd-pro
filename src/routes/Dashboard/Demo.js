import React, { Component, Fragment } from 'react';
import ReactEcharts from 'echarts-for-react';

// render echarts option.

const option = {
  title: {
    text: 'ECharts demo',
  },
  tooltip: {},
  legend: {
    data: ['Value'],
  },
  xAxis: {
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yAxis: {},
  series: [
    {
      name: 'Value',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

export default class Demo extends Component {
  render() {
    return (
      <Fragment>
        <ReactEcharts option={option} />
      </Fragment>
    );
  }
}
