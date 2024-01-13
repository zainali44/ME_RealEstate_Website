import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 52.3, label: 'Value-Add Retail' , color: '#04364A'},
  { id: 1, value: 9.8, label: 'Office/Industrial' , color: '#176B87'},
  { id: 2, value: 36.6, label: 'Mixed/Multifamily' , color: '#64CCC5'},
  { id: 3, value: 1.3, label: 'other' , color: '#2A3A2F'},
];

export default function Pie() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
        width={500}
    />
  );
}