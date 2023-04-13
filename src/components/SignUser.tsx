import { useFormik } from "formik";
import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { UserContext } from "../App";
import User from "../interfaces/User";
import { successMsg } from "../services/feedbacks";
import { addUser } from "../services/userServices";

interface SignUserProps {
    isBusiness: boolean;
}

const SignUser: FunctionComponent<SignUserProps> = ({ isBusiness }) => {
    let UserCtx = useContext(UserContext);
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: { name: "", email: "", password: "" },
        validationSchema: yup.object({
            name: yup.string().required().min(2),
            email: yup.string().required().email().min(5),
            password: yup.string().required().min(8)
        }),
        onSubmit: (values: User) => {
            const newUser = { ...values, isBusiness: isBusiness };
            addUser({ ...newUser, isBusiness })
                .then((res) => {
                    UserCtx.userctx = ({ ...newUser, isLoggedIn: true });
                    UserCtx.changeUser({ ...newUser, isLoggedIn: true });
                    navigate("/about");
                    sessionStorage.setItem("userData", JSON.stringify({
                        isLoggedIn: true,
                        isBusiness: newUser.isBusiness,
                        token: res.data
                    }));
                    successMsg("You have registered Successfully!");
                })
                .catch((err) => console.log(err));
        }
    });

    return (<>
        <form onSubmit={formik.handleSubmit}>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInputName"
                    placeholder="name@example.com"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor="floatingInputName">User Name</label>
                {formik.touched.name && formik.errors.name && (
                    <small className="text-danger">{formik.errors.name}</small>
                )}
            </div>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor="floatingInput">Email address</label>
                {formik.touched.email && formik.errors.email && (
                    <small className="text-danger">{formik.errors.email}</small>
                )}
            </div>
            <div className="form-floating">
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor="floatingPassword">Password</label>
                {formik.touched.password && formik.errors.password && (
                    <small className="text-danger">{formik.errors.password}</small>
                )}
            </div>
            <button type="submit" disabled={!formik.isValid || !formik.dirty} className="btn btn-info my-3 w-100">
                Sign Up
            </button>
        </form>


    </>);
}

export default SignUser;

