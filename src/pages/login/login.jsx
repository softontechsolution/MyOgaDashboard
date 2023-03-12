import "./login.scss";
import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    const handleLogin = (e)=>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(true);
                console.log(errorCode);
                console.log(errorMessage);
            });


    }

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="enter email address" onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder="enter password" onChange={e=>setPassword(e.target.value)}/>
                <button type="submit">Login</button>

                {error && <span>Wrong Email or Password</span>}
            </form>
        </div>
    )
}

export default Login