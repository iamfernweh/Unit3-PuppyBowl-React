import { Link } from "react-router-dom";

function NavBar() {
    const id = (Math.random() * 5 + 1);
    return (
        <>
            <h2>NavBar Component</h2>
            <Link to='/'>All Players</Link>
            <Link to={`/players/${id}`}>Random Player</Link>

        </>
    );
}

export default NavBar;