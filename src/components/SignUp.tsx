import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";


import SignUser from "./SignUser";


interface SignUpProps {

}

const SignUp: FunctionComponent<SignUpProps> = () => {
    let [isBusiness, setIsBusiness] = useState<boolean>(false);
    return (<>
        <div className="container mt-5 col-md-4 text-center">
            <h3 className="display-3 mb-4">Sign Up</h3>
            <div className="">
                <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => setIsBusiness(!isBusiness)} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> I Am A Business Owner</label>
                <SignUser isBusiness={isBusiness} />
            </div>
            <Link to="/SignIn">Already have account? Login here</Link>
        </div>

    </>);
}

export default SignUp;