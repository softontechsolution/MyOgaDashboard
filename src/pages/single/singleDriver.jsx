import "./singleDriver.scss";
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import DriverTable from "../../components/table/DriverTable";
import Chart from "../../components/chart/chart";

const SingleDriver = (props) => {

    const location = useLocation();
    const userID = location.state.id;
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const profile = [];
                const docRef = doc(db, "Drivers", userID);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    profile.push({ name: docSnap.data().FullName, Email: docSnap.data().Email, Phone: docSnap.data().Phone, address: docSnap.data().Address, gender: docSnap.data().Gender, dob: docSnap.data()['Date of Birth'], img: docSnap.data()['Profile Photo'] })
                    setData(profile);
                    console.log("Document data:", docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData()
        // const docRef = doc(db, "Users", userID);
        // const unsub = onSnapshot(docRef, (doc) => {
        //     setData(doc.data(), doc.id);
        // });
        // return () => {
        //     unsub();
        // }
    })

    return (
        <div className='singleDriver'>
            <Sidebar />
            <div className="singleDriverContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        < div className="item" >
                            <img src={data.map(data => (data.img))} alt="avatar" className="itemImg" />
                            <div className="details">
                                <h1 className="name">{data.map(data => (data.name))}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">{data.map(data => (data.Email))}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">{data.map(data => (data.Phone))}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address: </span>
                                    <span className="itemValue">{data.map(data => (data.address))}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Gender: </span>
                                    <span className="itemValue">{data.map(data => (data.gender))}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">DOB: </span>
                                    <span className="itemValue">{data.map(data => (data.dob))}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Usage (Last 6 Months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Bookings</h1>
                    <DriverTable id={userID} />
                </div>
            </div>
        </div>
    )
}

export default SingleDriver