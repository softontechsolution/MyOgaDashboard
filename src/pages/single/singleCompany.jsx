import "./singleCompany.scss"
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';

const SingleCompany = () => {
    return (
        <div className='singleCompany'>
            <Sidebar />
            <div className="singleCompanyContainer">
                <Navbar />
            </div>
        </div>
    )
}

export default SingleCompany