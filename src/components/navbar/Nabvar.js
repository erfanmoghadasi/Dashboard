import React , {useContext} from 'react';
import './Navbar.scss';

//MUI icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

//avatar 
import me from '../../assets/me.jpg';

import {DarkModeContext} from '../../context/darkModeContext'


function Nabvar() {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search . . .' />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon'/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className='icon' onclick={ ()=> dispatch({type: 'TOGGLE'}) }/>
                    </div>
                    <div className="item">
                        <FullscreenOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon'/>
<div className="counter">1</div>                
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon'/>
<div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                        <img className='avatar' src={me} alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nabvar;