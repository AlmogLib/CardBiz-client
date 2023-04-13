import { FunctionComponent, useContext, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

import '../css/navbar.css';
import { successMsg } from "../services/feedbacks";
// import { getIsBusiness, getIsLoggedIn } from "../services/userServices";


interface NavbarProps {
    // isLoggedIn: boolean;
    // setIsLoggedIn: Function;
}

const Navbar: FunctionComponent<NavbarProps> = () => {
    let navigate = useNavigate();
    // let isBusiness: boolean = getIsBusiness() === true ? true : false;
    // let isLoggedIn: boolean = getIsLoggedIn() === true ? true : false;
    let UserCtx = useContext(UserContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="/BlackLogo.png" alt="CardBiz" width={100} />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/about">
                                    About
                                </NavLink>
                            </li>
                            {!UserCtx.userctx.isLoggedIn &&
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/signin">
                                            Sign In
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/signup">
                                            Sign Up
                                        </NavLink>
                                    </li>
                                </>}
                            {UserCtx.userctx.isLoggedIn &&
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/allcards">
                                            All Cards
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/profile">
                                            Profile
                                        </NavLink>
                                    </li>

                                    {UserCtx.userctx.isBusiness && <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/mycards">
                                                My Cards
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/newcard">
                                                New Card
                                            </NavLink>
                                        </li>
                                    </>}
                                </>}
                        </ul>
                        {UserCtx.userctx.isLoggedIn &&
                            (<form className="d-flex" role="search">
                                <button
                                    className="btn btn-outline"
                                    onClick={() => {
                                        navigate("/");
                                        UserCtx.userctx.isLoggedIn = false;
                                        sessionStorage.removeItem("userData");
                                        successMsg("See You Soon :)");
                                    }}
                                >
                                    Logout
                                </button>
                            </form>)}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;