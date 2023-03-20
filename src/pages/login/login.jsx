import "./login.scss";
import { useContext, useState, useRef } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Snakbar from "../../components/snackbar/Snakbar";

const Login = () => {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const snackbarRef = useRef(null);
    const [msg, setMsg] = useState("");
    const [sType, setType] = useState("");
    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext)


    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user })
                setMsg("Logged In Succesfully");
                setType("success");
                snackbarRef.current.show();
                navigate("/");
            })
            .catch((error) => {
                setError(true);
                setMsg(error.message);
                setType("error");
                snackbarRef.current.show();
            });


    }

    return (
        <div className="login">
            <Snakbar ref={snackbarRef} message={msg} type={sType} />
            <h1 className="title">Welcome Admin, Sign In</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="enter email address" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="enter password" onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>

                {error && <span>Wrong Email or Password</span>}
            </form>
        </div>
    )
}

export default Login