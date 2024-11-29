import React, { PureComponent } from 'react';
import { PieChart, Legend, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Battery Disposal', value: 31.31 },
  { name: 'Desktop Recycling', value: 37.05 },
  { name: 'Laptop Recycling', value: 35.67 },
  { name: 'Miscellaneous', value: 42.58 },
  { name: 'Mobile Phone Recycling', value: 41.48 },
  { name: 'Printer Recycling', value: 39.25 },
  { name: 'TV Recycling', value: 28.13 },
];
const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#056c87', '#f24b07', '#34ddff'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
     <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
       <strong className="text-gray-700 font-medium">Total Volume of Waste Collected for each service type
       </strong>
       <div className="mt-3 w-full flex-1 text-xs">
     <ResponsiveContainer width="100%" height="100%">
        <PieChart width={380} height={380}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={95}
            fill="#8884d8"
            dataKey="value"
          >
            
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      </div>
      </div>
    );
  }
}
