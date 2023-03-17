import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { driverColumns, driversRows } from "../../datatablesource";
import { useNavigate, Link } from "react-router-dom"
import { useState } from 'react';

const DriverDatatable = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const handleDelete = async (id) => {
        setData(data.filter(item => item.id !== id));

    }

    const actionColumn = [{
        field: "action", headerName: "Action", Width: 250, renderCell: (params) => {
            return (
                <div className="cellAction">
                    <div className="viewButton" onClick={() => navigate(`/users/${params.id}`, { replace: true, state: { id: params.id } })}>View</div>
                    <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div >
            )
        }
    }]

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New Driver
                <Link to="/users/newDriver" style={{ textDecoration: "none" }} className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={driversRows}
                columns={driverColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default DriverDatatable