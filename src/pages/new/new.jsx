import Navbar from "../../components/navbar/navbar"
import Sidebar from "../../components/sidebar/sidebar"
import { useState } from "react";
import "./new.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { serverTimestamp, setDoc, doc } from "firebase/firestore"; 
import { auth, db } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

const New = ({inputs, title}) => {

    const [file, setFile] = useState("");
    const [data, setData] = useState({});

    const handleInput = (e) =>{
        const id = e.target.id;
        const value = e.target.value;

        setData({...data, [id]:value});
    };

    console.log(data);

    const handleAdd = async (e) => {
        e.preventDefault();

        try {
            const response = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const docRef = await setDoc(doc(db, "Users", response.user.uid), {
              ...data,
              timeStamp: serverTimestamp()
            });
          
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    }

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
                        <form onSubmit={handleAdd}>
                            <div className="formInput">
                               <label htmlFor="file"> Upload Image <DriveFolderUploadIcon className="icon"/></label>
                                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                            </div>
                            ))}
                            <button type="submit">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New