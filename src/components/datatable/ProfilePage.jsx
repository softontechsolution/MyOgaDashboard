import './profilePage.scss';
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const ProfilePage = () => {

    const [userID, setUserID] = useState('');
    const [data, setData] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchID();

        const fetchData = async () => {
            try {
                const profile = [];
                const docRef = doc(db, "Admin", userID);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    profile.push({ name: docSnap.data().name, Email: docSnap.data().email, date: docSnap.data().dateCreated, img: docSnap.data().profilePhoto })
                    setData(profile);
                } else {

                }
            } catch (error) {
            }
        };
        fetchData()
    }, [userID]);

    const fetchID = () => {
        const items = JSON.parse(localStorage.getItem('user'));
        if (items) {
            setItems(items);
            setUserID(items.uid);
        }
    }

    return (
        <div className='profile-page'>
            <div className="top">
                <div className="profileTitle">
                    Admin Profile
                </div>
            </div>
            <div className="bottom">
                <div className="p-left">
                    <img src={"https://images.pexels.com/photos/13419559/pexels-photo-13419559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="empty icon" />
                </div>
                <div className="p-right">
                    <div className="p-detail">
                        <h1>Name</h1>
                        <p>{data.map(data => (data.name))}</p>

                        <h1>Email</h1>
                        <p>{data.map(data => (data.Email))}</p>

                        <h1>Date Created</h1>
                        <p>{data.map(data => (data.date))}</p>
                        <button>Change Password</button>
                        <button>Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage