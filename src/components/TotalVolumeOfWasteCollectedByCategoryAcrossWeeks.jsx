import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Week 1',
    Small: 24.72,
    medium: 218.21,
    large: 107.97,
  },
  {
    name: 'Week 2',
    small: 40.84,
    medium: 183.84,
    large: 165.38,
  },
  {
    name: 'Week 3',
    small: 43.09,
    medium: 270.25,
    large: 57.67,
  },
  {
    name: 'Week 4',
    small: 43.02,
    medium: 340.89,
    large: 85.39,
  },
  {
    name: 'Week 5',
    small: 1.00,
    medium: 170.94,
    large: 1.00,
  },
  
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-bar-chart-7fwfgj';

  render() {
    return (
      <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
        <strong className="text-gray-700 font-medium">Total Volume of Waste Collected by Category across weeks

        </strong>
        <div className="mt-3 w-full flex-1 text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="small" stackId="a" fill="#34ddff" />
          <Bar dataKey="medium" stackId="a" fill="#0088fe" />
          <Bar dataKey="large" stackId="a" fill="#00c49f" />
        </BarChart>
      </ResponsiveContainer>
      </div> </div>
    );
  }
}
