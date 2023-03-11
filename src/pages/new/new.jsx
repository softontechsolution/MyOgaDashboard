import Navbar from "../../components/navbar/navbar"
import Sidebar from "../../components/sidebar/sidebar"
import { useState } from "react";
import "./new.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs, title}) => {

    const [file, setFile] = useState("");

    return (
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1 className="titleHading">{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="empty icon"/>
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                               <label htmlFor="file"> Upload Image <DriveFolderUploadIcon className="icon"/></label>
                                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder}/>
                            </div>
                            ))}
                            <button>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New