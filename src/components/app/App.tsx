import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

export default function App() {
    return (
        <div>
            <Helmet>
                <title>main page</title>
            </Helmet>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Link to="/">main page</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <Outlet />
        </div>
    )
}
