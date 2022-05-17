import React, { useState } from 'react';
import './datatable.scss';
import { Link } from 'react-router-dom';

//MUI
import { DataGrid } from '@mui/x-data-grid';

//data source
import {userRows, userColumns} from './../../dataTableSource'


function Datatable() {

    const [data, setData] = useState(userRows)

    const handleDelete = id => {
        setData(data.filter(item => item.id !== id))
    }

    const actionColumn = [
        {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellAction">
                    <Link to='/users/test'>
                    <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }
     }
    ]

    return (
        <div className='datatable' style={{ height:475, width: '96%' }}>
            <div className="datatableTitle">
                Add New User
                <Link to='/users/new' className='link'>
                    Add New
                </Link>
            </div>
      <DataGrid
      className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
    );
}

export default Datatable;