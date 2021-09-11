<<<<<<< HEAD

=======
import Button from '@material-ui/core/Button';
>>>>>>> Jamie2
import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {auth, signInWithEmailAndPassword, signInWithGoogle} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import './Login.css'

// const Field = React.forwardRef(({label, type, placeholder}, ref) => {
//     return (
//         <div>
//             <input ref={ref} type={type} style={inputStyle} placeholder={placeholder} />
//         </div>
//     );
// });

// const Form = ({onSubmit}) => {
//     const usernameRef = React.useRef();
//     const passwordRef = React.useRef();
//     const handleSubmit = e => {
//         e.preventDefault();
//         const data = {
//             username: usernameRef.current.value,
//             password: passwordRef.current.value
//         };
//         onSubmit(data);
//     };
//     return (
//         <form style={formStyle} onSubmit={handleSubmit} >
//             <h2 style={text}>Log in</h2>
//             <Field ref={usernameRef} label="Username:" type="text" placeholder="Email or username" />
//             <Field ref={passwordRef} label="Password:" type="password" placeholder="Password" />
//             <Button style={button} variant="contained" color='primary'>Log in</Button>
            // <div style={wordBarAlign}>
            //     <div style={wordBar}></div>
            //     <h2 style={textOr}>Or</h2>
            //     <div style={wordBar}></div>
            // </div>
//             <Button variant="contained" color='primary' onClick={signInWithGoogle}>Google</Button>
//         </form>
//     );
// };

// // Useage example:

// const LoginApp = () => {
//     const handleSubmit = data => {
//         const json = JSON.stringify(data, null, 4);
//         console.clear();
//         console.log(json);
//     };
//     return (
//         <div style={appStyle}>
//             <Form onSubmit={handleSubmit} />
//         </div>
//     );
// };



// export default LoginApp;

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) history.replace("/learn");
    }, [user, loading]);
    return (
        <div className="loginPage">
            <nav>
                <a href='localhost:3000' style={{textDecoration:"none"}}><h1 className="Heading">QUOKKA.IO</h1></a>
            </nav>
            <div className="login">
                <div style={formStyle}>

                    <h2 style={text}>Log in</h2>
                    <div>
                        <input
                            type="text"
                            className="login__textBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />
                        <input
                            type="password"
                            className="login__textBox"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <Button style={button} variant="contained" onClick={() => signInWithEmailAndPassword(email, password)} color='primary'>Log in</Button>
                    <div style={wordBarAlign}>
                        <div style={wordBar}></div>
                        <h2 style={textOr}>Or</h2>
                        <div style={wordBar}></div>
                    </div>
                    <Button style={button} variant="contained" onClick={() => signInWithGoogle()} color='primary'>Google</Button>

                    <div>
                        <Link to="/reset">Forgot Password?</Link>
                    </div>
                    <div>
                        Don't have an account? <Link to="/register">Register</Link> now.
                    </div>
                </div>
            </div>
        </div>
    );
}

//css
const appStyle = {
    height: '250px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '20px',
    // background: "#00ABE1",
    background: "white",
    width: '400px',
    display: 'block',
    textAlign: 'center',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, cans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '15px 10px',
    border: '1px solid #bfbfbf',
    borderRadius: '10px',
    boxSizing: 'border-box',
    width: '100%',
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '15px 10px',
    border: '1px solid #efffff',
    borderRadius: '10px',
    background: '#3085d6',
    width: '100%',
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

const wordBar = {
    background: "lightgrey",
    height: "2px",
    width: "120px",
    width: "35%"
}

const wordBarAlign = {
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "space-between"
}

const text = {
    fontSize: "40px"
}

const textOr = {
    fontSize: '24px',
    // marginTop: '6px',
    color: 'lightgrey'
}

const button = {
    margin: "20px 0"
}

export default Login;