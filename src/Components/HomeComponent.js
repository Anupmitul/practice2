import { Link } from "react-router-dom";


export function HomeComponent(){

    return(
        <div className="container-fluid">
            <h2>Shopping Home</h2>
            <Link to='/register'>New User Register</Link>
            <span> | </span>
            <Link to='/login'>Existing User</Link>

        </div>
    )
}