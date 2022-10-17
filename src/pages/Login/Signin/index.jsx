import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Login, LoginByGoogle } from "../../../port/auth";
import styles from '../style.module.scss';

export const Signin = ({status}) => {
    const [form ,setForm] = useState({email: '', password: ''});
    const [ isPasswordOpen, setIsPasswordOpen ] = useState(false);

    const googleBtn = useRef(null);
    
    const handleEmailChange = (e) => setForm({...form, email: e.target.value});
    const handlePasswordChange = (e) => setForm({...form, password: e.target.value});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        Login(form);
    };


    const handleCallbackResponse = (response) => {
        LoginByGoogle(response.credential);
    }
    
      useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: handleCallbackResponse
        })
    
        google.accounts.id.renderButton(
          googleBtn.current,
          {theme: 'outline', size: 'large'}
        )
    
      }, []);

    return (
        <div className={styles.page}>
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={handleEmailChange} name="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type={isPasswordOpen ? "text" : "password"} onChange={handlePasswordChange} name="password" id="password"/>
                    {
                        isPasswordOpen ?
                        <button type="button" onClick={()=>setIsPasswordOpen(false)}>
                            <i className={`${styles.eye} fa-regular fa-eye`}/>
                        </button>
                        :
                        <button type="button" onClick={()=>setIsPasswordOpen(true)}>
                            <i className={`${styles.slash_eye} fa-regular fa-eye-slash`}/>
                        </button>
                    }
                </div>
                <button className={styles.submit_button} type="submit">Login</button>
                <h3>Don't have account?</h3>    
                <Link to="/auth/sign-up">Sign up</Link>
                <div className={styles.google_login}>
                    <div ref={googleBtn}/>
                </div>
            </form>
        </div>
    )
}