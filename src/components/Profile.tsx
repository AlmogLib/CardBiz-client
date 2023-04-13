import { FunctionComponent, useEffect, useState } from "react";
import User from "../interfaces/User";
import { getUserProfile } from "../services/userServices";
import "../css/profile.css"
import { NavLink } from "react-router-dom";


interface ProfileProps { }

const Profile: FunctionComponent<ProfileProps> = () => {
    let [user, setUser] = useState<User | null>(null);


    useEffect(() => {
        getUserProfile()
            .then((res) => setUser(res.data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <div className="container">
                <h3 className="display-1 text-center mt-5">Hello, {user?.name ?? "Stranger"}</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-5">Your Details:</h5>

                                <p className="card-text">
                                    <strong>Name:</strong> {user?.name}
                                </p>
                                <p className="card-text">
                                    <strong>Email:</strong> {user?.email}
                                </p>
                                {user?.isBusiness &&
                                    <button className="btn btn-info mt-5">
                                        <NavLink className="nav-link" to="/newcard">
                                            Add New Card
                                        </NavLink>
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;