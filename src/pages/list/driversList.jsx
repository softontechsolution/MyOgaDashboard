import "./driversList.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

const DriversList = () => {
    return (
        <div className='driversList'>
            <Sidebar />
            <div className="driversListContainer">
                <Navbar />
            </div>
        </div>
    )
}

export default DriversList