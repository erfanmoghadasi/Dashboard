import React from 'react';
import './List.scss'

//components
import Nabvar from '../../components/navbar/Nabvar';
import Sidebar from '../../components/sidebar/Sidebar';
import Datatable from '../../components/datatable/Datatable';


function List() {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <Nabvar />
                <Datatable />
            </div>
        </div>
    );
}

export default List;