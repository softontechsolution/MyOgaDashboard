import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import { Link } from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">My Oga</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LIST</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/drivers" style={{ textDecoration: "none" }}>
                        <li>
                            <DirectionsCarIcon className="icon" />
                            <span>Drivers</span>
                        </li>
                    </Link>
                    <Link to="/company" style={{ textDecoration: "none" }}>
                        <li>
                            <EmojiTransportationIcon className="icon" />
                            <span>Companies</span>
                        </li>
                    </Link>
                    <Link to="/bookings" style={{ textDecoration: "none" }}>
                        <li>
                            <LibraryBooksIcon className="icon" />
                            <span>Bookings</span>
                        </li>
                    </Link>
                    <li>
                        <GpsFixedIcon className="icon" />
                        <span>Order Status</span>
                    </li>
                    <li>
                        <DonutSmallIcon className="icon" />
                        <span>Earnings</span>
                    </li>
                    <p className="title">USEFUL LINKS</p>
                    <li>
                        <CircleNotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <CreditScoreIcon className="icon" />
                        <span>Payments</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <li>
                        <PermIdentityIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    )
}

export default Sidebar