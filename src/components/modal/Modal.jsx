import "./modal.scss";
import { useEffect } from 'react';
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Modal = ({ open, onClose }) => {
    const [userID, setUserID] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUserID(uid);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });

        const fetchData = async () => {
            try {
                const profile = [];
                const docRef = doc(db, "Admin", userID);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    profile.push({ name: docSnap.data().name, Email: docSnap.data().email, date: docSnap.data().dateCreated, img: docSnap.data().profilePhoto })
                    setData(profile);
                    console.log("Document data:", docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData()
    }, [userID])

    if (!open) return null;
    return (
        <div className="overlay">
            <div className="modal">
                <div className="modalLeft">
                    <img
                        src={data.map(data => (data.img))}
                        alt="cottonbro studio from Pexels"
                        className="avatar"
                    />
                </div>
                <div className="modalRight">
                    <div className="closeBtn" onClick={onClose}> <h1>&#x2613;</h1></div>
                    <div className="content">
                        <h1>{data.map(data => (data.name))}</h1>
                        <p>{data.map(data => (data.Email))}</p>
                        <p>{data.map(data => (data.date))}</p>
                        <div className="pBtn">Change Password</div>
                        <div className="sBtn">Settings</div>
                    </div>
                    <div className="btnContainer">
                        <button className="btnPrimary">
                            <span className="bold">Updated Profile</span>
                        </button>
                        <button className="btnOutline">
                            <span className="bold">Okay</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal