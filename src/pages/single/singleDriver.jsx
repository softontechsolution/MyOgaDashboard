import "./singleDriver.scss";
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';

const SingleDriver = () => {
    return (
        <div className='singleDriver'>
            <Sidebar />
            <div className="singleDriverContainer">
                <Navbar />
            </div>
        </div>
    )
}

export default SingleDriver