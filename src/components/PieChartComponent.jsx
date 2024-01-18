import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const InnerCircleLabel = ({ value }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
    }}
  >
    <div style={{ fontSize: '30px', fontWeight: 'bold', color: 'black' }}>{value}</div>
  </div>
);

const PercentageLabel = ({ value }) => (
  <div
    style={{
      position: 'absolute',
      top: '35%',
      left: '90%',
      transform: 'translate(-50%, -50%)',
      color: '',
      fontSize: '20px',
    }}
  >
    {value}
  </div>
);
const AboutLabel = ({}) => (
  <div
    style={{
      position: 'absolute',
      top: '45%',
      left: '90%',
      transform: 'translate(-50%, -50%)',
      color: 'red',
      fontSize: '20px',
    }}
  >
  <button style={{ border:'none', backgroundColor:'transparent', color:'grey'}}>About Graph</button>
    
  </div>
);const DetailsLabel = ({ value }) => (
  <div
    style={{
      position: 'absolute',
      top: '60%',
      left: '90%',
      transform: 'translate(-50%, -50%)',
      color: 'black',
      fontSize: '20px',
    }}
  >
 <button style={{ color:'#0099ff', backgroundColor:'transparent', border:'none', fontSize:'15px'}}> See Details <KeyboardArrowRightIcon /> </button>
  
  </div>
);

const data = [
  { name: "Group A", value: 75 },
  { name: "Group B", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: x,
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        fontSize: '20px',
      }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </div>
  );
};

const PieChartComponent = () => (
  <div style={{ position: 'relative', display: 'flex' }}>
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        innerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    <AboutLabel/>
    <DetailsLabel/>
    <InnerCircleLabel value="75%" />
    <PercentageLabel value="75%" />
  </div>
);

export default PieChartComponent;
