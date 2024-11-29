import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Week 1',
    GreenHouseGasEmissionsReduced : 1103.78,
    CarbonEmissionsReduced: 807.16,
  },
  {
    name: 'Week 2',
    GreenHouseGasEmissionsReduced : 809.25,
    CarbonEmissionsReduced: 789.8,
  },
  {
    name: 'Week 3',
    GreenHouseGasEmissionsReduced : 961.83,
    CarbonEmissionsReduced: 687.13,
  },
  {
    name: 'Week 4',
    GreenHouseGasEmissionsReduced : 1225.98,
    CarbonEmissionsReduced: 996.27,
  },
  {
    name: 'Week 5',
    GreenHouseGasEmissionsReduced : 460.4,
    CarbonEmissionsReduced: 327.5,
  },
    
];

const Example = () => {
  const [opacity, setOpacity] = React.useState({
    GreenHouseGasEmissionsReduced: 1,
    CarbonEmissionsReduced: 1,
  });

  const handleMouseEnter = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
        <strong className="text-gray-700 font-medium">Reduction in Carbon Emissions and Greenhouse Gas (GHG) Emissions across weeks

        </strong>
        <div className="mt-3 w-full flex-1 text-xs">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          width={500}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line type="monotone" dataKey="GreenHouseGasEmissionsReduced" strokeOpacity={opacity.GreenHouseGasEmissionsReduced} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="CarbonEmissionsReduced" strokeOpacity={opacity.CarbonEmissionsReduced} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

Example.demoUrl = 'https://codesandbox.io/p/sandbox/customized-legend-event-gwscjg';

export default Example;
