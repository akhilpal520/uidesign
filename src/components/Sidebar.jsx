import React, { useState } from 'react';
import './sidebar.css';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import TtyIcon from '@mui/icons-material/Tty';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{
      borderRight:'5px light grey', boxShadow: '5px 0 5px rgba(0, 0, 0, 0.1)'
    }} className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div>
        {/* Logo */}
      </div>
      <div>
      <div className='imglogo' >
         <img src="https://cdn.worldvectorlogo.com/logos/dots-more.svg" alt="" />
         <h3 >TRADEVERSE</h3>
        </div>
        <button onClick={toggleSidebar}></button>
        <a href="#">
          <h5 style={{color:'#a6a6a6'}}>MAIN MENU</h5>
          <ul>
            <li className={location.pathname === '/newsquant' ? 'active' : ''}>
              <Link to="/newsquant">
                <LanguageOutlinedIcon style={{ color: location.pathname === '/newsquant' ? '#0099FF' : 'black' }}/> News quant
              </Link>
            </li>
            <li> 
              <AddchartOutlinedIcon  style={{ color:'#a6a6a6'}}/> Real Economics Indicators
            </li>
            <li>
              <CreditScoreIcon style={{ color:'#a6a6a6'}}/> One Score
            </li>
            <li>
              <NotificationImportantIcon style={{ color:'#a6a6a6'}}/> Alert Central
            </li>
            <li>
              <TtyIcon style={{ color:'#a6a6a6'}} /> Customer Support
            </li>
          </ul>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
