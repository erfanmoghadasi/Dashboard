import React from 'react';
import './Home.scss'

//Components
import Sidebar from '../../components/sidebar/Sidebar';
import Nabvar from '../../components/navbar/Nabvar';
import Widget from '../../components/widget/Widget';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import TableList from '../../components/tableList/TableList';

function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Nabvar />
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <TableList />
                </div>
            </div>
        </div>
    );
}

export default Home;