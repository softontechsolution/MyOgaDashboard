import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
//import ListIcon from '@mui/icons-material/List';
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import Mmodal from "../modal/PModal";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Link } from "react-router-dom";
//import ProfileModal from "../modal/ProfileModal";

const Navbar = () => {

    const { dispatch } = useContext(DarkModeContext);
    const [openModal, setOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    //const [category, setCategory] = useState("");
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    //const userId = auth.currentUser?.uid;

    useEffect(() => {
        // Fetch the data from Firestore
        const unsubscribe = onSnapshot(collection(db, "Drivers"), (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            // Filter the items array based on the search term
            const filtered = data.filter((driver) => {
                const name = driver.FullName?.toLowerCase() ?? "";
                return name.includes(searchTerm?.toLowerCase() ?? "");
            });
            setItems(data);
            setFilteredItems(filtered);
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, [searchTerm]);

    const handleSearch = () => {
        const filtered = items.filter((driver) => {
            const name = driver.FullName?.toLowerCase() ?? "";
            return name.includes(searchTerm?.toLowerCase() ?? "");
        });
        setFilteredItems(filtered);
    };

    return (
        <div className="mNavbar">
            <Mmodal open={openModal} onClose={() => setOpenModal(false)} />
            <div className="wrapper">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            handleSearch();
                        }}
                    />

                    <SearchIcon style={{ cursor: "pointer" }} />
                    {searchTerm !== "" && filteredItems.length > 0 && (
                        <div className="dropdown">
                            {filteredItems.map((driver) => (
                                <Link
                                    key={driver.id}
                                    to={`/drivers/${driver.id}`}
                                    className="dropdown-item"
                                >
                                    {driver.FullName}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })} />
                    </div>

                    {/* <div className="item">
                        <FullscreenExitIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineIcon className="icon" />
                        <div className="counter">2</div>
                    </div> */}
                    <div className="item" onClick={() => setOpenModal(true)} >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3033/3033143.png"
                            alt="cottonbro studio from Pexels"
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar