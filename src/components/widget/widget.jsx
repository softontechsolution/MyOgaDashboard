import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import { useEffect, useState } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase";

const Widget = ({ type }) => {
    const [amount, setAmount] = useState(null);
    const [diff, setDiff] = useState(null);
    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "see all users",
                query: "Users",
                icon: (
                    <PersonOutlineIcon
                        className="icon"
                        style={{
                            color: "#e290fa",
                            backgroundColor: "#dcf3fd",
                        }}
                    />
                ),
            };
            break;

        case "driver":
            data = {
                title: "DDRIVERS",
                isMoney: false,
                link: "see all drivers",
                query: "Drivers",
                icon: (
                    <DirectionsCarIcon
                        className="icon"
                        style={{
                            color: "#e290fa",
                            backgroundColor: "#dcf3fd",
                        }}
                    />
                ),
            };
            break;

        case "booking":
            data = {
                title: "BOOKINGS",
                isMoney: false,
                link: "see all bookings",
                query: "Bookings",
                icon: (
                    <LibraryBooksIcon
                        className="icon"
                        style={{
                            color: "#e290fa",
                            backgroundColor: "#dcf3fd",
                        }}
                    />
                ),
            };
            break;

        case "company":
            data = {
                title: "COMPANIES",
                isMoney: false,
                link: "see all companies",
                query: "Companies",
                icon: (
                    <EmojiTransportationIcon
                        className="icon"
                        style={{
                            color: "#e290fa",
                            backgroundColor: "#dcf3fd",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    useEffect(() => {
        const fetchData = async () => {
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

            const lastMonthQuery = query(collection(db, data.query), where("timeStamp", "<=", today), where("timeStamp", ">", lastMonth));
            const prevMonthQuery = query(collection(db, data.query), where("timeStamp", "<=", lastMonth), where("timeStamp", ">", prevMonth));

            const lastMonthData = await getDocs(lastMonthQuery);
            const prevMonthData = await getDocs(prevMonthQuery);

            setAmount(lastMonthData.docs.length);
            setDiff((lastMonthData.docs.length - prevMonthData.docs.length) / (prevMonthData.docs.length) * 100);
        }
        fetchData()
    }, [data])

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "NGN"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
                    {diff < 0 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget