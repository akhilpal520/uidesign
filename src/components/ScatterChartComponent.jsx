import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ZAxis, Legend, Cell } from 'recharts';
import FilterListIcon from '@mui/icons-material/FilterList';

const generateRandomDataPoint = () => ({
  x: Date.now(),
  y: Math.random() * 100,
  z: Math.random() * 500,
});

const COLORS = ['blue', 'green', 'yellow',  'red',];

const ScatterChartComponent = () => {
  const [data, setData] = useState([]);
  const [interval, setInterval] = useState(5 * 60 * 1000); // Default to 5 minutes
  const [selectedInterval, setSelectedInterval] = useState(5 * 60 * 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData((prevData) => [...prevData, generateRandomDataPoint()]);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  const handleIntervalChange = (newInterval) => {
    setInterval(newInterval);
    setSelectedInterval(newInterval);
  };

  const getTimeDomain = () => {
    const currentTime = Date.now();
    const startTime = currentTime - interval;
    return [startTime, currentTime];
  };

  return (
    <div style={{ display:'flex' }}>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <h1>News & Data Flow</h1>
      
        <ScatterChart
          width={730}
          height={250}
          margin={{
            top: 20,
            right: 20,
            bottom: 10,
            left: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="x"
            type="number"
            name="stature"
            unit="cm"
            domain={getTimeDomain()}
            tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
          />
          <YAxis dataKey="y" type="number" name="" unit=""  />
          <ZAxis dataKey="z" type="number" range={[64, 500]} name="score" unit="" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="" data={data} fill={COLORS[0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Scatter>
        </ScatterChart>
      </div>

      <div style={{ display:'flex', flexDirection:'row', gap:'10px', padding:'10px'}}>
        <div style={{ display:'flex', border:'1px solid lightgray', height:'20px', padding:'5px', gap:'2px' }} >
          <button
            style={{ border:'none',backgroundColor:'transparent', color: selectedInterval === 5 * 60 * 1000 ? '#0099ff' : '' }}
            onClick={() => handleIntervalChange(5 * 60 * 1000)}
          >
            5m
          </button>
          <button
            style={{ border:'none',backgroundColor:'transparent', color: selectedInterval === 15 * 60 * 1000 ? '#0099ff' : '' }}
            onClick={() => handleIntervalChange(15 * 60 * 1000)}
          >
            15m
          </button>
          <button
            style={{ border:'none',backgroundColor:'transparent', color: selectedInterval === 30 * 60 * 1000 ? '#0099ff' : '' }}
            onClick={() => handleIntervalChange(30 * 60 * 1000)}
          >
            30m
          </button>
          <button
            style={{ border:'none',backgroundColor:'transparent', color: selectedInterval === 60 * 60 * 1000 ? '#0099ff' : '' }}
            onClick={() => handleIntervalChange(60 * 60 * 1000)}
          >
            1hr
          </button>
          <button
            style={{ border:'none',backgroundColor:'transparent', color: selectedInterval === 4 * 60 * 60 * 1000 ? '#0099ff' : '' }}
            onClick={() => handleIntervalChange(4 * 60 * 60 * 1000)}
          >
            4hr
          </button>
          <button
            style={{ border:'none',backgroundColor:'transparent', color: selectedInterval === 8 * 60 * 60 * 1000 ? '#0099ff' : '' }}
            onClick={() => handleIntervalChange(8 * 60 * 60 * 1000)}
          >
            8hr
          </button>
          <button
            style={{ border:'none',backgroundColor:'transparent', color: selectedInterval === 24 * 60 * 60 * 1000 ? '#0099ff' : '' }}
            onClick={() => handleIntervalChange(24 * 60 * 60 * 1000)}
          >
            1day
          </button>
          <button
            style={{ border:'none',backgroundColor:'transparent', color: selectedInterval === 365*24 * 60 * 60 * 1000 ? '#0099ff' : '' }}
            onClick={() => handleIntervalChange(24 * 60 * 60 * 1000)}
          >
            All
          </button>
        </div>

        <div style={{ backgroundColor:'#0099ff', height:'20px', color:'white', display:'flex', alignItems:'center', borderRadius:'3px', border:'none', padding:'5px' }}>
          <FilterListIcon fontSize='small' />
          <button
            style={{  display:'inline', border:'none', color:'white', backgroundColor:'#0099ff', height:'20px', width:'60px' }}
          >
            Filter
          </button>
          <ArrowDropDownIcon fontSize='small'/>
        </div>
      </div>
    </div>
  );
};

export default ScatterChartComponent;
