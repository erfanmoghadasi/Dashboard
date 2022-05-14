import React from 'react';
import './Home.scss'

//Components
import Sidebar from '../../components/sidebar/Sidebar';
import Nabvar from '../../components/navbar/Nabvar';
import Widget from '../../components/widget/Widget';

function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Nabvar />
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
            </div>
        </div>
    );
}

export default Home;