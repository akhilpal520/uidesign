import React, {useState, useEffect} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './newsquant.css'
import MicIcon from '@mui/icons-material/Mic';
import { InputAdornment, IconButton, Input } from '@mui/material';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PieChartComponent from './PieChartComponent';
import ScatterChartComponent from './ScatterChartComponent';
export const Newsquant = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      // Simulated data for demonstration
      const newData = Array.from({ length: 20 }, (_, index) => ({
        time: new Date().getTime() + index * 1000, // Timestamp for every second
        value: Math.random() * 100,
      }));

      setData(newData);
    };

    fetchData(); // Initial data fetch

    const interval = setInterval(() => {
      fetchData(); // Simulate fetching real-time data every second
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='newsquant'>
    
       <div className='newsq1'>
        <div className='newq1a'>
        <Input
        className='inputItem'
      type='text'
      placeholder='Search your question here or ask'
      
      startAdornment={
        <InputAdornment position='start'>
          <IconButton>
            <SearchIcon />
            
          </IconButton>
        </InputAdornment>
        
      }
     
      endAdornment={
        <InputAdornment position='end'>
          <IconButton>
            
            <MicIcon style={{ color:'#0099FF'}} />
          </IconButton>
        </InputAdornment>
      }
    />     
        </div>
        <div className='profileItem'>

        <Badge badgeContent={3} color="success">
  <NotificationsIcon color="action" />
</Badge>
        <img className='profileImg' src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <p>Username</p>
        </div>
       </div>

       <div className='newq2'>
        <div className='newq2a'>
            <p className='newq2ap'><span  style={{ fontSize:'22px',color:'#0099FF'}}>Current Licence : </span>    USD/CAD  AUD/USD</p>

        </div>
        <div className='newq2b'>
             <h4 className='newq2ba'>Welcome,Username</h4>
             <p>very good</p> 
        </div>
       </div>
      <div className='newq4'>
        <div className='newq4a' >
        <ScatterChartComponent/>
        </div>
        <div className='newq4b'>
        <h3>Average Score</h3>
        <div style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
        <PieChartComponent/>
        
        </div>
        </div>
      </div>
      
       <div className='newq3'>
        <div className='newq3a'>
            <table width='100%'  >
                <tr className='tableHead' >
                    <th>Type</th>
                    <th>News</th>
                    <th>Score</th>
                    <th>Impact</th>
                    <th>Probability</th>
                </tr>
                <tr>
                <th  className='newq3a1'><div className='newqt1'></div>ERU</th>
                <th>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit.
                      Atque id quae eaque 
                     </th>
                <th>+1</th>
                <th>Neutral</th>
                <th><button>High</button></th>
                </tr>
                <tr>
                <th rowSpan={2} className='newq3a1'><div className='newqt2'></div>ERU</th>
                <th>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit.
                      Atque id quae eaque ex alias 
                      iure non aspernatur at,luptate?</th>
                <th>+1</th>
                <th>Neutral</th>
                <th><button>High</button></th>
                </tr>
                <tr>
                <th className='newq3a1'><div className='newqt3'></div>ERU</th>
                <th>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit.
                      Atque id quae eaque ex alias 
                      iure non aspernatur at,luptate?</th>
                <th>+1</th>
                <th>Neutral</th>
                <th><button>High</button></th>
                </tr>
                <tr>
                <th className='newq3a1'><div className='newqt4'></div>ERU</th>
                <th>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit.
                      Atque id quae eaque ex alias 
                      iure non aspernatur at,luptate?</th>
                <th>+1</th>
                <th>Neutral</th>
                <th><button>High</button></th>
                </tr>
                <tr>
                <th className='newq3a1'><div className='newqt5'></div>ERU</th>
                <th>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit.
                      Atque id quae eaque ex alias 
                      iure non aspernatur at,luptate?</th>
                <th>+1</th>
                <th>Neutral</th>
                <th><button>High</button></th>
                </tr>
            </table>
        </div>
        <div className='newq3b'>
          
          <h3 >Top 10 Focus Topics</h3>
          <div className='newqall'>
          <ol className='newq3b1'>
          <li>Focus Topic 1</li>
          <li>Focus Topic 2</li>
          <li>Focus Topic 3</li>
          <li>Focus Topic 4</li>
          <li>Focus Topic 5</li>
          <li>Focus Topic 6</li>
          <li>Focus Topic 7</li>
          <li>Focus Topic 8</li>
          <li>Focus Topic 9</li>
          <li>Focus Topic 10</li>  
          <button className='seeall'>see all <ArrowForwardIosIcon fontSize='smaller'/></button> 

          </ol>
          <div className='newq3b2'>
          <button>Score 1</button>
          <button>Score 1</button>
          <button>Score 1</button>
          <button>Score 1</button>
          <button>Score 1</button>
          <button>Score 1</button>
          <button>Score 1</button>
          <button>Score 1</button>
          <button>Score 1</button>
          <button>Score 1</button>
          
          </div>
          </div>
        </div>
       </div>
    </div>
  )
}
