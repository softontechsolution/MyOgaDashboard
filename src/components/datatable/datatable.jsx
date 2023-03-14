import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from "../../datatablesource";
import { useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from './../../firebase';

const Datatable = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);

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
    const unsub = onSnapshot(collection(db, "Users"), (snapShot) => {
      let list = [];
      snapShot.docs.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() });
      });
      console.log(list);
      setData(list);
    }, (error) => {
      console.log(error);
    });

    return () => {
      unsub();
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Users", id));
      setData(data.filter(item => item.id !== id));
    } catch (erre) {
      console.log(erre);
    }
  }

  const actionColumn = [{
    field: "action", headerName: "Action", Width: 200, renderCell: (params) => {
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
        Add New User
        <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable