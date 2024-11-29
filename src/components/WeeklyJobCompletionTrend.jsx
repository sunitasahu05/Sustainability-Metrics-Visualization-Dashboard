import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Week 1',
      completed: 20,
    },
    {
      name: 'Week 2',
      completed: 20,
    },
    {
      name: 'Week 3',
      completed: 22,
    },
    {
      name: 'Week 4',
      completed: 28,
    },
    {
      name: 'Week 5',
      completed: 10,
    },
    ];
  
  export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/simple-area-chart-4y9cnl';
  
    render() {
      return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
        <strong className="text-gray-700 font-medium">Weekly Job Completion Trend </strong>
        <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="completed" stroke="#287a46" fill="#00c49f" />
          </AreaChart>
        </ResponsiveContainer>
        </div>
        </div>
      );
    }
  }
  