import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "../css/home.css"

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (<>
        <div className="container mt-3">
            <h3 className="display-1">Welcome To CardBiz</h3>
            <div className="row">
                <div className="card col-md-2">
                    <div className="card-body">
                        <h5 className="card-title mb-5">Who Are We?</h5>
                        <p className="card-text mt-5">You just started a new business and need some publicity? Do you want to gain more access in the virtual world? CardBiz is just what you look for. Create Your Digital Business Card Today.</p>
                    </div>
                </div>
                <img src="/ExampleCard.png" alt="" className="col-md-8" />
                <div className="card col-md-2">
                    <div className="card-body">
                        <h5 className="card-title mb-5">Join Us</h5>
                        <p className="card-text mt-5">Digital cards are more accessible than their paper counterparts because they can be shared asynchronously with anyone, anywhere. To put it simply, if you have a smartphone or computer, you can make, send, and receive digital cards whenever and wherever you want.</p>
                        <button className="btn btn-info m-1">
                            <NavLink className="nav-link" to="/signin">
                                Sign In
                            </NavLink>
                        </button>
                        <button className="btn btn-info mt-2">
                            <NavLink className="nav-link" to="/signup">
                                Sign Up
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Home;