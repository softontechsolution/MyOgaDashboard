import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
//import ListIcon from '@mui/icons-material/List';
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import Mmodal from "../modal/PModal";
//import ProfileModal from "../modal/ProfileModal";

const Navbar = () => {

    const { dispatch } = useContext(DarkModeContext);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="mNavbar">
            <Mmodal open={openModal} onClose={() => setOpenModal(false)} />
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search...." />
                    <SearchIcon />
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