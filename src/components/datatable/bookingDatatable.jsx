import "./bookingDatatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { bookingColumns, } from "../../datatablesource";
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect, useRef } from 'react';
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from './../../firebase';
import Snakbar from "../snackbar/Snakbar";

const BookingDatatable = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const snackbarRef = useRef(null);
    const [msg, setMsg] = useState("");
    const [sType, setType] = useState("");

    useEffect(() => {
        // const fetchData = async () =>{
        //   let list = [];
        //   try{

        //     const querySnapshot = await getDocs(collection(db, "Users"));
        //     querySnapshot.forEach((doc) => {
        //       list.push({id: doc.id, ...doc.data()});
        //       console.log(doc.id, " => ", doc.data());
        //     });
        //      setData(list);
        //   }catch(error){
        //     console.log(error);
        //   }
        // };
        // fetchData()

        //Listening to Database
        const unsub = onSnapshot(collection(db, "Bookings"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach(doc => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
            setMsg(" Displaying Users Information ");
            setType("success");
            snackbarRef.current.show();
        }, (error) => {
            setMsg(error.message);
            setType("error");
            snackbarRef.current.show();
        });

        return () => {
            unsub();
        }
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "Bookings", id));
            setData(data.filter(item => item.id !== id));
            setMsg("User Deleted Succesfully");
            setType("success");
            snackbarRef.current.show();
        } catch (erre) {
            console.log(erre);
            setMsg(erre.message);
            setType("error");
            snackbarRef.current.show();
        }
    }

    const actionColumn = [{
        field: "action", headerName: "Action", Width: 250, renderCell: (params) => {
            return (
                <div className="cellAction">
                    <div className="viewButton" onClick={() => navigate(`/bookings/${params.id}`, { replace: true, state: { id: params.id } })}>View</div>
                    <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div >
            )
        }
    }]

    return (
        <div className='datatable'>
            <Snakbar ref={snackbarRef} message={msg} type={sType} />
            <div className="datatableTitle">
                Add New Booking
                <Link to="/bookings/new" style={{ textDecoration: "none" }} className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={bookingColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default BookingDatatable