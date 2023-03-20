import "./modal.scss";

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div className="overlay">
            <div className="modal">
                <div className="modalLeft">
                    <img
                        src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="cottonbro studio from Pexels"
                        className="avatar"
                    />
                </div>
                <div className="modalRight">
                    <div className="closeBtn" onClick={onClose}> <h1>&#x2613;</h1></div>
                    <div className="content">
                        <h1>Name</h1>
                        <p>Email</p>
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