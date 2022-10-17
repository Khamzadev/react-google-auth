export const Board = ({user, logout}) => {
    return(
        <div style={{textAlign: 'start', overflowX: 'auto'}}>
            <p>First name: {user.firstname}</p>
            <p>Last name: {user.lastname}</p>
            <p>Email: {user.email}</p>
            <p>Token: {localStorage.getItem('jwt-token')}</p>
            <button 
                type="button" 
                style={{background: 'none', border: 'none', cursor: 'pointer', fontWeight: '700'}}
                onClick={logout}>Log out</button>
        </div>
    )
}