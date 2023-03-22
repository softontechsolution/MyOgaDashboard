import "./singleDriver.scss";
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const SingleDriver = (props) => {

    const location = useLocation();
    const userID = location.state.id;
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const profile = [];
                const docRef = doc(db, "Users", userID);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    profile.push({ name: docSnap.data().FullName, Email: docSnap.data().Email, Phone: docSnap.data().Phone, address: docSnap.data().Address, gender: docSnap.data().Gender, dob: docSnap.data()['Date of Birth'], img: docSnap.data()['Profile Photo'] })
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
        // const docRef = doc(db, "Users", userID);
        // const unsub = onSnapshot(docRef, (doc) => {
        //     setData(doc.data(), doc.id);
        // });
        // return () => {
        //     unsub();
        // }
    })

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