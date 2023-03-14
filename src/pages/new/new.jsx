import Navbar from "../../components/navbar/navbar"
import Sidebar from "../../components/sidebar/sidebar"
import { useEffect, useState } from "react";
import "./new.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { setDoc, doc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {

    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const uploadFile = () => {

            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setPerc(progress)
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                    console.log('ERROR', error);
                },
                () => {
                    // Handle successful uploads on complete
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData((prev) => ({ ...prev, 'Profile Photo': downloadURL })
                        )
                    });
                }
            );

        }
        file && uploadFile();
    }, [file])

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setData({ ...data, [id]: value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();

        try {
            const response = await createUserWithEmailAndPassword(auth, data.Email, data.Password);
            const docRef = await setDoc(doc(db, "Users", response.user.uid), {
                ...data,
                timeStamp: new Date().toString(),
                Status: "inactive",
            });
            navigate(-1);

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1 className="titleHading">{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="empty icon" />
                    </div>
                    <div className="right">
                        <form onSubmit={handleAdd}>
                            <div className="formInput">
                                <label htmlFor="file"> Upload Image <DriveFolderUploadIcon className="icon" /></label>
                                <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                                </div>
                            ))}
                            <button disabled={per !== null && per < 100} type="submit">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New