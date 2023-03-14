export const userColumns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
        field: "user", headerName: "User", width: 200, renderCell: (params)=>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row['Profile Photo']} alt=" avatar "/>
                    {params.row.FullName}
                </div>
            )
        }
    },
    {
        field: "Email", headerName:"Email", width: 200,
    },
    {
        field: "Phone", headerName:"Phone Number", width: 150,
    },
    {
        field: ['Date of Birth'], headerName:"Date of Birth", width: 100,
    },
    {
        field: "Gender", headerName:"Gender", width: 100,
    },
    {
        field: "Address", headerName:"Address", width: 150,
    },
    {
        field: "Status", headerName:"Status", width: 100,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.Status}`}>
                    {params.row.Status}
                </div>
            )
        }
    },
    {
        field: "timeStamp", headerName:"Date Created", width: 150,
    },
];
