import React from 'react';
import './Home.scss'

//Components
import Sidebar from '../../components/sidebar/Sidebar';
import Nabvar from '../../components/navbar/Nabvar';

function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Nabvar />
            </div>
        </div>
    );
}

export default Home;