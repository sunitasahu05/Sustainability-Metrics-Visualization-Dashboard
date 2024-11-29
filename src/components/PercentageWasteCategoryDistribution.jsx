import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Legend, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: ' Large', value: 15 },
  { name: 'Medium', value: 64 },
  { name: 'Small', value: 21 },
  ];
const COLORS = ['#FFBB28', '#0088FE',  '#FF8042'];

const RADIAN = Math.PI / 180;
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
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
        <strong className="text-gray-700 font-medium">Percentage of Waste Category Distribution
        </strong>
        <div className="mt-3 w-full flex-1 text-xs">
      <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={180}
          cy={120}
          innerRadius={30}
          outerRadius={100}
          
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
       <Legend />
      </PieChart>
      </ResponsiveContainer>
      </div></div>
    );
  }
}
