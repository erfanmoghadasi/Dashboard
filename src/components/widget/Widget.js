import React from 'react';
import './Widget.scss';

//MUI icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";


function Widget(props) {
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">456845</span>
                <span className="link">see all users</span>
            </div>
            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpIcon />
                    20 %
                </div>
                <PersonOutlineOutlinedIcon className='icon' />
            </div>
        </div>
    );
}

export default Widget;