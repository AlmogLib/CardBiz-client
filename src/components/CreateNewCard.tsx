import { useFormik } from "formik";
import { FunctionComponent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { successMsg } from "../services/feedbacks";
import * as yup from "yup";
import Card from "../interfaces/Card";
import { addCard } from "../services/cardServices";
import "../css/newCard.css";
import { UserContext } from "../App";

interface CreateNewCardProps { }

const CreateNewCard: FunctionComponent<CreateNewCardProps> = () => {
    let navigate = useNavigate();
    let UserCtx = useContext(UserContext);
    let formik = useFormik({
        initialValues: { name: "", description: "", address: "", phone: 0, image: "", website: "" },
        validationSchema: yup.object({
            name: yup.string().required().min(2),
            description: yup.string().required().min(5),
            address: yup.string().required().min(5),
            phone: yup.number().required(),
            image: yup.string().required().min(5),
            website: yup.string().required()
        }),
        onSubmit: (values: Card) => {
            addCard({ ...values, userId: UserCtx.userctx.id })
                .then((res) => {
                    navigate("/allcards");
                    successMsg("Card added successfully");
                })
                .catch((err) => console.log(err));
        }
    });
    useEffect(() => {
        formik.setFieldValue("phone", "")
    }, []);
    return (<>
        <div className="container mt-5 col-md-4 text-center">
            <h3 className="display-3 mb-3">Create New Card</h3>
            <p>Create a card for your business</p>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInputBusinessName"
                        placeholder="Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInputBusinessName">Business Name</label>
                    {formik.touched.name && formik.errors.name && (
                        <small className="text-danger">{formik.errors.name}</small>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInputDescription"
                        placeholder="Description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInputDescription">Business Description</label>
                    {formik.touched.description && formik.errors.description && (
                        <small className="text-danger">{formik.errors.description}</small>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInputAddress"
                        placeholder="address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInputaddress">Business Address</label>
                    {formik.touched.address && formik.errors.address && (
                        <small className="text-danger">{formik.errors.address}</small>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="phone"
                        className="form-control"
                        id="floatingInputPhone"
                        placeholder="Phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInputPhone">Business Phone</label>
                    {formik.touched.phone && formik.errors.phone && (
                        <small className="text-danger">{formik.errors.phone}</small>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInputWebsite"
                        placeholder="Website"
                        name="website"
                        value={formik.values.website}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInputWebsite">Business Website</label>
                    {formik.touched.website && formik.errors.website && (
                        <small className="text-danger">{formik.errors.website}</small>
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInputImage"
                        placeholder="name@example.com"
                        name="image"
                        value={formik.values.image}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInputImage">Business Image</label>
                    {formik.touched.image && formik.errors.image && (
                        <small className="text-danger">{formik.errors.image}</small>
                    )}
                </div>
                <button type="submit" disabled={!formik.isValid || !formik.dirty} className="btn btn-info my-3 w-100">
                    Create
                </button>
            </form>
        </div>
    </>);
}

export default CreateNewCard;