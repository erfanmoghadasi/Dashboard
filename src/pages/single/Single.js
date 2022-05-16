import React from 'react';
import './Single.scss';

//avatar 
import avatar from "../../assets/avatar.png";

//Components
import Sidebar from '../../components/sidebar/Sidebar';
import Nabvar from '../../components/navbar/Nabvar';
import Chart from '../../components/chart/Chart';
import TableList from '../../components/tableList/TableList';

function Single() {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Nabvar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">edit</div>
                        <div className="title">Information</div>
                        <div className="item">
                            <img src={avatar} alt="avatar" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Erfan M</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">erfan.moqadasii@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+98 918 603 28 38</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Markazi, Arak</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Iran</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="right">
                        <Chart aspect={3/1} title='User Spending (Last 6 Months)'/>
                    </div>
                </div>
                <div className="bottom">
                <div className="title">Last Transactions</div>
                    <TableList />
                </div>
            </div>
        </div>
    );
}

export default Single;