export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user", headerName: "User", width: 200, renderCell: (params)=>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "email", headerName:"Email", width: 200,
    },
    {
        field: "dob", headerName:"Date of Birth", width: 100,
    },
    {
        field: "gender", headerName:"Gender", width: 100,
    },
    {
        field: "address", headerName:"Address", width: 150,
    },
    {
        field: "status", headerName:"Status", width: 100,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: " John Snow",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "active",
        email: "johneazy@gmail.com",
        address: "16 16 BW ABJ",
        gender: "Male",
        dob: "06/02/1997",
        
    },
    {
        id: 2,
        username: " John Snow",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "active",
        email: "johneazy@gmail.com",
        address: "16 16 BW ABJ",
        gender: "Male",
        dob: "06/02/1997",
        
    },
    {
        id: 3,
        username: " John Snow",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "inactive",
        email: "johneazy@gmail.com",
        address: "16 16 BW ABJ",
        gender: "Male",
        dob: "06/02/1997",
        
    },
    {
        id: 4,
        username: " John Snow",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "active",
        email: "johneazy@gmail.com",
        address: "16 16 BW ABJ",
        gender: "Male",
        dob: "06/02/1997",
        
    },
    {
        id: 5,
        username: " John Snow",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "active",
        email: "johneazy@gmail.com",
        address: "16 16 BW ABJ",
        gender: "Male",
        dob: "06/02/1997",
        
    },
    {
        id: 6,
        username: " John Snow",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "active",
        email: "johneazy@gmail.com",
        address: "16 16 BW ABJ",
        gender: "Male",
        dob: "06/02/1997",
        
    },
    {
        id: 7,
        username: " John Snow",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "active",
        email: "johneazy@gmail.com",
        address: "16 16 BW ABJ",
        gender: "Male",
        dob: "06/02/1997",
        
    },
    {
        id: 8,
        username: " John Snow",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "active",
        email: "johneazy@gmail.com",
        address: "16 16 BW ABJ",
        gender: "Male",
        dob: "06/02/1997",
        
    },
    {
        id: 9,
        username: " John Snow",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "inactive",
        email: "johneazy@gmail.com",
        address: "16 16 BW ABJ",
        gender: "Male",
        dob: "06/02/1997",
        
    },
    {
        id: 10,
        username: " John Snow",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "active",
        email: "johneazy@gmail.com",
        address: "16 16 BW ABJ",
        gender: "Male",
        dob: "06/02/1997",
        
    },
];