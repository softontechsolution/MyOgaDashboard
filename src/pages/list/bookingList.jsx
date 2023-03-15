import "./bookingList.scss";
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';

const BookingList = () => {
    return (
        <div className='bookingList'>
            <Sidebar />
            <div className="bookingListContainer">
                <Navbar />
            </div>
        </div>
    )
}

export default BookingList