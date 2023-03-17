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

export const driverColumns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
        field: "user", headerName: "Driver Name", width: 200, renderCell: (params)=>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt=" avatar "/>
                    {params.row.user}
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
        field: "DateOfBirth", headerName:"Date of Birth", width: 100,
    },
    {
        field: "Gender", headerName:"Gender", width: 100,
    },
    {
        field: "Location", headerName:"Location", width: 100,
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
        field: "Verified", headerName:"Verification", width: 100,
    },
    {
        field: "Company", headerName:"Company", width: 150,
    },
    {
        field: "Document", headerName:"Documents", width: 150,
    },
    {
        field: "VehicleType", headerName:"Vehicle Type", width: 100,
    },
    {
        field: "VehicleMake", headerName:"Vehicle Make", width: 100,
    },
    {
        field: "VehicleColor", headerName:"Vehicle Color", width: 100,
    },
    {
        field: "VehicleYear", headerName:"Vehicle Year", width: 100,
    },
    {
        field: "VehicleNumber", headerName:"Vehicle Number", width: 100,
    },
    {
        field: "timeStamp", headerName:"Date Created", width: 150,
    },
];
export const companyColumns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
        field: "CompanyName", headerName: "Company Name", width: 200, renderCell: (params)=>{
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
        field: "Phone", headerName:"Company Phone Number", width: 150,
    },
    {
        field: "DateOfRegistration", headerName:"Date of Registration", width: 150,
    },
    {
        field: "Address", headerName:"Company Address", width: 150,
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
        field: "Document", headerName:"Documents", width: 150,
    },
    {
        field: "timeStamp", headerName:"Date Created", width: 150,
    },
];
export const bookingColumns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
        field: "CustomerName", headerName:"Cusomer Name", width: 200,
    },
    {
        field: "CustomerPhone", headerName:"Customer Phone Number", width: 150,
    },
    {
        field: 'CustomerID', headerName:"Customer ID", width: 100,
    },
    {
        field: "DriverID", headerName:"Driver ID", width: 100,
    },
    {
        field: "PickUp", headerName:"Pick Up Address", width: 150,
    },
    {
        field: "DropOff", headerName:"Drop Off Address", width: 150,
    },
    {
        field: "distance", headerName:"Distance", width: 150,
    },
    {
        field: "amount", headerName:"Amount", width: 150,
    },
    {
        field: "method", headerName:"Payment Method", width: 150,
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

export const driversRows = [
    {
        id: "12DFsdCDEZ",
        user: "Jane Lawrence",
        Email: "Jane Lawrence",
        Phone: "+2349023453223",
        DateOfBirth: "22 MAY 1993",
        Gender: "Male",
        Address: "no 43 Street gwags",
        Location: "Abuja",
        timeStamp: "02 March 2023",
        Company: "Kelvent Logistics",
        Document: "no docs",
        VehicleType: "Motorcycle",
        VehicleMake: "BAJAJ",
        VehicleColor: "RED",
        VehicleYear: "2010",
        VehicleNumber: "SKLL79-ABJ",
        Status: "Pending",
    },
    {
        id: "12DFCazDEZ",
        user: "Jane Lawrence",
        Email: "Jane Lawrence",
        Phone: "+2349023453223",
        DateOfBirth: "22 MAY 1993",
        Gender: "Male",
        Address: "no 43 Street gwags",
        Location: "Abuja",
        timeStamp: "02 March 2023",
        Company: "Kelvent Logistics",
        Document: "12km",
        VehicleType: "Motorcycle",
        VehicleMake: "TSUZUKI",
        VehicleColor: "RED",
        VehicleYear: "2010",
        VehicleNumber: "SKLL79-ABJ",
        Status: "active",
    },
    {
        id: "12DFLKCDEZ",
        user: "Jane Lawrence",
        Email: "Jane Lawrence",
        Phone: "+2349023453223",
        DateOfBirth: "22 May 1993",
        Gender: "Male",
        Address: "no 43 Street gwags",
        Location: "Abuja",
        timeStamp: "22 April 2022",
        Company: "MerryGo Logistics",
        Document: "12km",
        VehicleType: "Motorcycle",
        VehicleMake: "BAJAJ",
        VehicleColor: "RED",
        VehicleYear: "2010",
        VehicleNumber: "SKLL79-ABJ",
        Status: "inactive",
    },
    {
        id: "12ZGDFCDEZ",
        user: "Jane Lawrence",
        Email: "Jane Lawrence",
        Phone: "+2349023453223",
        DateOfBirth: "22 MAY 1993",
        Gender: "Male",
        Address: "no 43 Street gwags",
        Location: "Abuja",
        timeStamp: "22 April 2022",
        Company: "Kelvent Logistics",
        Document: "12km",
        VehicleType: "Motorcycle",
        VehicleMake: "BAJAJ",
        VehicleColor: "RED",
        VehicleYear: "2010",
        VehicleNumber: "SKLL79-ABJ",
        Status: "Pending",
    },
    {
        id: "12DFCDMNEZ",
        user: "Jane Lawrence",
        Email: "Jane Lawrence",
        Phone: "+2349023453223",
        DateOfBirth: "22 MAY 1993",
        Gender: "Male",
        Address: "no 43 Street gwags",
        Location: "Abuja",
        timeStamp: "22 April 2022",
        Company: "Kelvent Logistics",
        Document: "12km",
        VehicleType: "Motorcycle",
        VehicleMake: "BAJAJ",
        VehicleColor: "RED",
        VehicleYear: "2010",
        VehicleNumber: "SKLL79-ABJ",
        Status: "Pending",
    },
    {
        id: "12DFERCDEZ",
        user: "Jane Lawrence",
        Email: "Jane Lawrence",
        Phone: "+2349023453223",
        DateOfBirth: "22 MAY 1993",
        Gender: "Male",
        Address: "no 43 Street gwags",
        Location: "Abuja",
        timeStamp: "22 April 2022",
        Company: "MerryGo Logistics",
        Document: "12km",
        VehicleType: "Motorcycle",
        VehicleMake: "BAJAJ",
        VehicleColor: "RED",
        VehicleYear: "2010",
        VehicleNumber: "SKLL79-ABJ",
        Status: "Pending",
    },
    {
        id: "12DFOYCDEZ",
        user: "Jane Lawrence",
        Email: "Jane Lawrence",
        Phone: "+2349023453223",
        DateOfBirth: "22 MAY 1993",
        Gender: "Male",
        Address: "no43 Street gwags",
        Location: "Abuja",
        timeStamp: "22 April 2022",
        Company: "Kelvent Logistics",
        Document: "12km",
        VehicleType: "Motorcycle",
        VehicleMake: "BAJAJ",
        VehicleColor: "RED",
        VehicleYear: "2010",
        VehicleNumber: "SKLL79-ABJ",
        Status: "Pending",
    },
    {
        id: "12DFCDEPMDZ",
        user: "Jane Lawrence",
        Email: "Jane Lawrence",
        Phone: "+2349023453223",
        DateOfBirth: "22 MAY 1993",
        Gender: "Male",
        Address: "no 43 Street gwags",
        Location: "Abuja",
        timeStamp: "22 April 2022",
        Company: "Kelvent Logistics",
        Document: "no docs",
        VehicleType: "Motorcycle",
        VehicleMake: "BAJAJ",
        VehicleColor: "RED",
        VehicleYear: "2010",
        VehicleNumber: "234RFS",
        Status: "Pending",
    },
  ];

export const companyRows = [
    {
        id: "12DFidCDEZ",
        CompanyName: "Jane Lawrence",
        Phone: "+2349023453223",
        Email: "none",
        DateOfRegistration: "02 March 2023",
        Address: "no 43 Street gwags",
        Document: "new york street, utako",
        timeStamp: "12km",
        Status: "Pending",
    },
    {
        id: "12DFGHHCDEZ",
        CompanyName: "Jane Lawrence",
        Phone: "+2349023453223",
        Email: "none",
        DateOfRegistration: "02 March 2023",
        Address: "no 43 Street gwags",
        Document: "new york street, utako",
        timeStamp: "12km",
        Status: "Pending",
    },
    {
        id: "12DFDFKSZ",
        CompanyName: "Jane Lawrence",
        Phone: "+2349023453223",
        Email: "none",
        DateOfRegistration: "02 March 2023",
        Address: "no 43 Street gwags",
        Document: "new york street, utako",
        timeStamp: "12km",
        Status: "Pending",
    },
    {
        id: "12DFLPZCDEZ",
        CompanyName: "Jane Lawrence",
        Phone: "+2349023453223",
        Email: "none",
        DateOfRegistration: "02 March 2023",
        Address: "no 43 Street gwags",
        Document: "new york street, utako",
        timeStamp: "12km",
        Status: "Pending",
    },
];
export const bookingRows = [
    {
        id: "12DFCDEZ",
        CustomerID: "12DFCmpoDEZ",
        CustomerName: "Jane Lawrence",
        CustomerPhone: "+2349023453223",
        DriverID: "AJSndjhhfihsqhhc",
        timeStamp: "02 March 2023",
        PickUp: "no 43 Street gwags",
        DropOff: "new york street, utako",
        distance: "12km",
        amount: "4500",
        method: "Cash on Delivery",
        Status: "Pending",
    },
    {
        id: "12DF01DEZ",
        CustomerID: "12DFCmpoaDEZ",
        CustomerName: "Jane Lawrence",
        CustomerPhone: "+2349023453223",
        DriverID: "AJSndjh234hfihsqhhc",
        timeStamp: "02 March 2023",
        PickUp: "no 43 Street gwags",
        DropOff: "new york street, utako",
        distance: "12km",
        amount: "4500",
        method: "Cash on Delivery",
        Status: "Pending",
    },
    {
        id: "12DFCD178EZ",
        CustomerID: "12DFCmMQDFDEZ",
        CustomerName: "Jane Lawrence",
        CustomerPhone: "+2349023453223",
        DriverID: "AJSndjhhfihsqhhc",
        timeStamp: "02 March 2023",
        PickUp: "no 43 Street gwags",
        DropOff: "new york street, utako",
        distance: "12km",
        amount: "4500",
        method: "Cash on Delivery",
        Status: "Pending",
    },
    {
        id: "12DFCD23OPEZ",
        CustomerID: "12DFCmpoARTDEZ",
        CustomerName: "Jane Lawrence",
        CustomerPhone: "+2349023453223",
        DriverID: "AJSndjhhfihsqhhc",
        timeStamp: "02 March 2023",
        PickUp: "no 43 Street gwags",
        DropOff: "new york street, utako",
        distance: "12km",
        amount: "4500",
        method: "Cash on Delivery",
        Status: "Pending",
    },
    {
        id: "12DFC765LDEZ",
        CustomerID: "12DFCmpoL1DEZ",
        CustomerName: "Jane Lawrence",
        CustomerPhone: "+2349023453223",
        DriverID: "AJSndjhhfihsqhhc",
        timeStamp: "02 March 2023",
        PickUp: "no 43 Street gwags",
        DropOff: "new york street, utako",
        distance: "12km",
        amount: "4500",
        method: "Cash on Delivery",
        Status: "Pending",
    },
    {
        id: "12DFCDS4DEZ",
        CustomerID: "12DFCmpo4SAQDEZ",
        CustomerName: "Jane Lawrence",
        CustomerPhone: "+2349023453223",
        DriverID: "AJSndjhhfihsqhhc",
        timeStamp: "02 March 2023",
        PickUp: "no 43 Street gwags",
        DropOff: "new york street, utako",
        distance: "12km",
        amount: "4500",
        method: "Cash on Delivery",
        Status: "Pending",
    },
];