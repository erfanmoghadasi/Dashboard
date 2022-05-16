import React from 'react';
import './datatable.scss';

//MUI
import { DataGrid } from '@mui/x-data-grid';

//data source
import {userRows, userColumns} from './../../dataTableSource'


function Datatable() {
    const actionColumn = [
        {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: () => {
            return (
                <div className="cellAction">
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
     }
    ]

    return (
        <div className='datatable' style={{ height:475, width: '96%' }}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
    );
}

export default Datatable;