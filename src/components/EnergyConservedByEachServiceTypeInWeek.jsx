import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Battery Disposal',
    EnergyConservedInFourWeek: 397.6,  
  },
  {
    name: 'Desktop Recycling',
    EnergyConservedInFourWeek: 172.01,   
  },
  {
    name: 'Laptop Recycling',
    EnergyConservedInFourWeek: 520.2, 
  },
  {
    name: 'Miscellaneous',
    EnergyConservedInFourWeek: 635.82,
      },
  {
    name: 'Mobile Phone Recycling',
    EnergyConservedInFourWeek: 326.36,
     },
  {
    name: 'Printer Recycling',
    EnergyConservedInFourWeek: 1008.59,
    },
  {
    name: 'TV Recycling',
    EnergyConservedInFourWeek: 167.99,
     },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
      <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
        <strong className="text-gray-700 font-medium md:text-sm sm:text-sm">Energy Conserved by each Service type in Week 4
        </strong>
        <div className="mt-3 w-full flex-1 text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
        layout="vertical"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />          
          <Bar dataKey="EnergyConservedInFourWeek" fill="#266aa4" activeBar={<Rectangle fill="#0088fe" stroke="blue" />} />
           </BarChart>
      </ResponsiveContainer>
      </div>
      </div>
    );
  }
}
