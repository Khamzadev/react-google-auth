import { Link } from "react-router-dom";

export const Unlogged = () => {
    return (
    <>
        <h1>You are not logged in</h1>
        <div>
            <Link to="/auth/sign-in">Sign in</Link>
        </div>
        <div>
            <Link to="/auth/sign-up">Sign up</Link>
        </div>
    </>)
};