import { useState } from "react";
import styles from '../style.module.scss'
import { Register } from "../../../port/auth";
import { Link } from "react-router-dom";

export const Signup = () => {
    const [ form, setForm ] = useState({firstname: '', lastname: '', email: '', password: '', confirmPassword: ''})
    const [ isPasswordOpen, setIsPasswordOpen ] = useState(false);
    const [ isConfirmPasswordOpen, setIsConfirmPasswordOpen ] = useState(false);

    const handleChangeInput = (e) => {
        const  { value, name } = e.target;
        setForm(prev =>({...prev, [name]: value}));
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (form.confirmPassword === form.password) {
            const data = {...form};
            delete data.confirmPassword;
            Register(data);
        }
    }

    return (
        <div className={styles.page}>
            <form onSubmit={handleSubmitForm}>
                <h1>Create account</h1>
                <div className={styles.firstname_input}>
                    <label htmlFor="firstname">First name</label>
                    <input type="text" name="firstname" id="firstname" onChange={handleChangeInput}/>
                </div>
                <div className={styles.lastname_input}>
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" name="lastname" id="lastname" onChange={handleChangeInput}/>
                </div>
                <div className={styles.email_input}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChangeInput}/>
                </div>
                <div className={styles.password_input}>
                    <label htmlFor="password">Password</label>
                    <input type={isPasswordOpen ? "text" : "password"} name="password" id="password" onChange={handleChangeInput}/>    
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
                <div className={styles.password_input}>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type={isConfirmPasswordOpen ? "text" : "password"} name="confirmPassword" id="confirmPassword" onChange={handleChangeInput}/>
                    {
                        isConfirmPasswordOpen ?
                        <button type="button" onClick={()=>setIsConfirmPasswordOpen(false)}>
                            <i className={`${styles.eye} fa-regular fa-eye`}/>
                        </button>
                        :
                        <button type="button" onClick={()=>setIsConfirmPasswordOpen(true)}>
                            <i className={`${styles.slash_eye} fa-regular fa-eye-slash`}/>
                        </button>
                    }
                </div>
                <button className={styles.submit_button}>
                    Sign up
                </button>
                <h3>Already have account?</h3>    
                <Link to="/auth/sign-in">Sign in</Link>
            </form>
        </div>
    )
}