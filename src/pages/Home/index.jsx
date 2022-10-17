import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../redux/reducers/generaSlice";
import { Board } from "./Board";
import styles from './style.module.scss';
import { Unlogged } from "./Unlogged";

export const Home = () => {
    const { isLogged, user } = useSelector(state=>state.general);
    const dispatch = useDispatch();
    const handleLogout = () => dispatch(setLogout());
    return (
        <div className={styles.page}>
            <div className={styles.board}>
                {
                    isLogged
                    ? <Board user={user} logout={handleLogout}/>
                    : <Unlogged />
                }
            </div>
        </div>
    )
}