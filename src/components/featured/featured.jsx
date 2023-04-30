import "./featured.scss"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, useEffect } from 'react';
import { collection, getDocs, where, query, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';

const Featured = () => {

    const [Selected, setSelected] = useState("total");
    const [data, setData] = useState([]);
    const [oData, setOData] = useState([]);
    const [lData, setLData] = useState([]);
    const [fieldSum, setFieldSum] = useState(0);
    const [oneSum, setOneSum] = useState(0);
    const [lastSum, setLastSum] = useState(0);
    const [diff, setDiff] = useState(null);

    useEffect(() => {

        const FetchData = async () => {

            let list = [];

            if (Selected === "1") {
                const today = new Date();
                const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000); // Timestamp for 1 day ago // 24 hours in milliseconds
                const q = query(collection(db, "Bookings"), where("timeStamp", "<=", today), where("timeStamp", ">", yesterday));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                    // doc.data() is never undefined for query doc snapshots
                });
                setData(list);

            } else if (Selected === "7") {
                const now = new Date();
                const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                const q = query(collection(db, "Bookings"), where("timeStamp", ">=", sevenDaysAgo));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                    // doc.data() is never undefined for query doc snapshots
                });
                setData(list);

            } else if (Selected === "30") {
                const now = new Date();
                const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                const q = query(collection(db, "Bookings"), where("timeStamp", ">=", thirtyDaysAgo));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                    // doc.data() is never undefined for query doc snapshots
                });
                setData(list);
            } else if (Selected === "total") {
                const unsub = onSnapshot(collection(db, "Bookings"), (snapShot) => {
                    let list = [];
                    snapShot.docs.forEach(doc => {
                        list.push({ id: doc.id, ...doc.data() });
                    });
                    setData(list);

                }, (error) => {
                    alert("Error", + error.message);
                });

                return () => {
                    unsub();
                }
            }
        };
        FetchData();

    }, [Selected]);

    useEffect(() => {
        const sum = data.reduce((total, item) => total + parseInt(item.Amount), 0);
        setFieldSum(sum);
    }, [data]);

    useEffect(() => {
        getData();
    });

    const getData = async () => {
        let dataArray = [];
        let dataOArray = [];
        const today = new Date();
        const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        const twoWeekAgo = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000);
        const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
        const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

        const lastMonthQuery = query(collection(db, "Bookings"), where("timeStamp", "<=", today), where("timeStamp", ">", lastMonth));
        const prevMonthQuery = query(collection(db, "Bookings"), where("timeStamp", "<=", lastMonth), where("timeStamp", ">", prevMonth));
        const oneWeekQuery = query(collection(db, "Bookings"), where("timeStamp", "<=", today), where("timeStamp", ">", oneWeekAgo));
        const twoWeekQuery = query(collection(db, "Bookings"), where("timeStamp", "<=", oneWeekAgo), where("timeStamp", ">", twoWeekAgo));

        const lastMonthData = await getDocs(lastMonthQuery);
        const prevMonthData = await getDocs(prevMonthQuery);
        const oneWeekData = await getDocs(oneWeekQuery);
        const twoWeekData = await getDocs(twoWeekQuery);
        setDiff(Math.round((oneWeekData.docs.length - twoWeekData.docs.length) / (twoWeekData.docs.length) * 100));

        lastMonthData.forEach((doc) => {
            dataArray.push({ id: doc.id, ...doc.data() });
        });
        setLData(dataArray);

        oneWeekData.forEach((doc) => {
            dataOArray.push({ id: doc.id, ...doc.data() });
        });
        setOData(dataOArray);

        const total = lData.reduce((total, item) => total + parseInt(item.Amount), 0);
        setLastSum(total);

        const sum = oData.reduce((total, item) => total + parseInt(item.Amount), 0);
        setOneSum(sum);

    }



    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <select className="chart-select" onChange={(e) => {
                    e.preventDefault();
                    setSelected(e.target.value);
                }} >
                    <option value="total">Total</option>
                    <option value="30">30 Days</option>
                    <option value="7">7 Days</option>
                    <option value="1">1 Day</option>
                </select>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={diff === Infinity ? 0 : diff} text={`${diff}%`} strokeWidth={3} />
                </div>
                <p className="title">Total earnings for {Selected === "1" ? "today" : `${Selected} days`} </p>
                <p className="amount">₦{fieldSum}</p>
                <p className="desc">This is the total earnigs from completed trips</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">₦20500</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small" />
                            <div className="resultAmount">₦{oneSum}</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small" />
                            <div className="resultAmount">₦{lastSum}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured