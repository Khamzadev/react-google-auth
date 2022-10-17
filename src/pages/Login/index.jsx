import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router"
import { Signin } from "./Signin"
import { Signup } from "./Signup"

export const Auth = () => {
    const navigate = useNavigate();
    const { status, error, isLogged } = useSelector(state=>state.general);
    useEffect(()=>{
        if (isLogged) navigate('/');
        if (status === 'Registered succesfully') navigate('/auth/sign-in')
    }, [isLogged, status, navigate]);
    return (
        <Routes>
            <Route path="/sign-in" element={<Signin status={status} error={error} />}/>
            <Route path="/sign-up" element={<Signup status={status} error={error} />}/>
        </Routes>
    )
}