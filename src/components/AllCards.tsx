import { FunctionComponent, useContext, useEffect, useState } from "react";
import Card from "../interfaces/Card";
import { getAllCards } from "../services/cardServices";
import "../css/cards.css";

interface AllCardsProps { }

const AllCards: FunctionComponent<AllCardsProps> = () => {
    let [allCards, setAllCards] = useState<Card[]>([]);
    useEffect(() => {
        getAllCards().then((res) => {
            setAllCards(res.data);
        }).catch((err) => console.log(err))
    }, []);
    return (<>
        <h3 className="display-3 mt-5 mb-4">All Cards</h3>

        {allCards.length ? (
            <div className="container mb-5">
                <div className="row">
                    {allCards.map((card: Card) => (
                        <div
                            key={card._id}
                            className="card ms-1 mx-4 my-4"
                            style={{ width: "18rem" }}>
                            <img
                                src={card.image}
                                className="card-img-top"
                                alt={card.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{card.name}</h5>
                                <p className="card-text">{card.description}</p>
                                <p className="card-text">{card.phone}</p>
                                <p className="card-text">{card.address}</p>
                                <p className="card-text">{card.website}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <p>No Cards</p>
        )}
    </>);
}

export default AllCards;