import "./single.scss"
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Chart from "../../components/chart/chart";
import TableJ from "../../components/table/table";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

const Single = (props) => {
    const location = useLocation();
    console.log(location);
    const userID = location.state.id;

    useEffect(() => {

    })
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avatar" className="itemImg" />
                            <div className="details">
                                <h1 className="name">Jon Snow</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">jonsnowGOT@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">+234 7039384947</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address: </span>
                                    <span className="itemValue">No 45 USasd Street Abia</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Gender: </span>
                                    <span className="itemValue">Male</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">DOB: </span>
                                    <span className="itemValue">23/10/1995</span>
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
                    <TableJ />
                </div>
            </div>
        </div>
    )
}

export default Single