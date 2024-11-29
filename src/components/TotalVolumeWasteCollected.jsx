import React, { PureComponent } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    Service: 'Battery Disposal',
    Volume: 197,
   },
  {
    Service: 'Desktop Recycling',
    Volume: 191,
  },
  {
    Service: 'Laptop Recycling',
    Volume: 311,
  },
  {
    Service: 'Miscellaneous',
    Volume: 285,
  },
  {
    Service: 'Mobile Phone Recycling',
    Volume: 244,
  },
  {
    Service: 'Printer Recycling',
    Volume: 272,
  },
  {
    Service: 'TV Recycling',
    Volume: 248,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-double-yaxis-39dhps';

  render() {
    return (
      <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
        <strong className="text-gray-700 font-medium">Total Volume of Waste Collected
        </strong>
        <div className="mt-3 w-full flex-1 text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 10,
                left: 0,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
              <XAxis dataKey="Service" />
              <YAxis />
              <Tooltip />
              
              <Bar dataKey="Volume" fill="#0ea5e9" />
             
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }
}
