import "./companyList.scss"
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';

const CompanyList = () => {
    return (
        <div className='companyList'>
            <Sidebar />
            <div className="companyListContainer">
                <Navbar />
            </div>
        </div>
    )
}

export default CompanyList