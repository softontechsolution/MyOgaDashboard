import "./singleBooking.scss";
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';

const SingleBooking = () => {
    return (
        <div className='singleBooking'>
            <Sidebar />
            <div className="singleBookingContainer">
                <Navbar />
            </div>
        </div>
    )
}

export default SingleBooking