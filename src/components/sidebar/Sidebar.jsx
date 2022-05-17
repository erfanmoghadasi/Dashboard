import React, { useContext } from "react";
import "./Sidebar.scss";

//MUI icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

//react router dom
import { Link } from "react-router-dom";

import { DarkModeContext } from '../../context/darkModeContext';

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link className="link" to='/'>
        <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
        <Link className="link" to='/'>
          <li>
            <DashboardOutlinedIcon className="icon" />
            <span>Dashboard</span>
          </li>
        </Link>
          <p className="title">LISTS</p>
        <Link className="link" to='/users'>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
            </Link> 
        <Link className="link" to='/products'>
            
          <li>
            <ProductionQuantityLimitsOutlinedIcon className="icon" />
            <span>Products</span>
          </li>
          </Link>
          <li>
            <BookmarkBorderOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
          <div className="colorOption" onClick={() => dispatch({type: 'LIGHT'})}></div>
          <div className="colorOption" onClick={() => dispatch({type: 'DARK'})}></div>
      </div>
    </div>
  );
}

export default Sidebar;
