import { FunctionComponent, useEffect, useState } from "react";
import Card from "../interfaces/Card";
import DeleteCardModal from "./DeleteCardModal";
import UpdateModal from "./UpdateModal";
import "../css/cards.css";
import { getMyCards } from "../services/userServices";


interface MyCardsProps { }

const MyCards: FunctionComponent<MyCardsProps> = () => {
    let [myCards, setMyCards] = useState<Card[]>([]);
    let [cardId, setCardId] = useState<string>("");
    let [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    let [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    let [cardChanged, setCardChanged] = useState<boolean>(false);

    useEffect(() => {
        getMyCards().then((res) => {
            setMyCards(res.data);
        }).catch((err) => console.log(err))
    }, [cardChanged]);

    let refresh = () => {
        setCardChanged(!cardChanged);
    }

    return (
        <>
            <h3 className="display-3 mt-5 mb-4">My Cards</h3>
            {myCards.length ? (
                <div className="container">
                    <div className="row">
                        {myCards.map((card: Card) => (
                            <div
                                key={card._id}
                                className="card ms-1 mx-4 my-4"
                                style={{ width: "18rem" }}
                            >
                                <img
                                    src={card.image}
                                    className="card-img-top"
                                    alt={card.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{card.name}</h5>
                                    <p className="card-text">{card.description}</p>
                                    <p className="text-success">{card.phone}</p>
                                    <p className="text-success">{card.address}</p>
                                    <p className="text-success">{card.website}</p>

                                    <button
                                        className="btn btn-warning"
                                        onClick={() => {
                                            setOpenUpdateModal(true);
                                            setCardId(card._id as string);
                                        }}
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button
                                        className="btn btn-danger mx-3"
                                        onClick={() => {
                                            setOpenDeleteModal(true);
                                            setCardId(card._id as string);
                                        }}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No Cards</p>
            )}
            <DeleteCardModal refresh={refresh} show={openDeleteModal} onHide={() => setOpenDeleteModal(!openDeleteModal)} cardId={cardId} />
            <UpdateModal show={openUpdateModal} onHide={() => setOpenUpdateModal(!openUpdateModal)} cardId={cardId} refresh={refresh} />
        </>
    );
};

export default MyCards;