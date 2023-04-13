import axios from "axios";
import Card from "../interfaces/Card";
// import User from "../interfaces/User";

const api: string = process.env.REACT_APP_API + "/cards" || "";

// add new Card
export function addCard(newCard: Card) {
    return axios.post(api, newCard, { headers: { Authorization: JSON.parse(sessionStorage.getItem("userData") as string).token } });
}
// get Card by id
export function getCardsById(id: string) {
    return axios.get(`${api}/${id}`, { headers: { Authorization: JSON.parse(sessionStorage.getItem("userData") as string).token } })
}
// get All Cards
export function getAllCards() {
    return axios.get(api, { headers: { Authorization: JSON.parse(sessionStorage.getItem("userData") as string).token } });
}

// delete Card
export function deleteCard(id: string) {
    return axios.delete(`${api}/${id}`, { headers: { Authorization: JSON.parse(sessionStorage.getItem("userData") as string).token } });
}

// update Card
export function updateCard(newCard: Card) {
    return axios.put(`${api}/${newCard._id}`, newCard, { headers: { Authorization: JSON.parse(sessionStorage.getItem("userData") as string).token } });
}
