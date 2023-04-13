import axios from "axios";
import User from "../interfaces/User";
import jwt_decode from "jwt-decode";


const api: string = process.env.REACT_APP_API || "";


export function checkUser(userToCheck: User) {
    return axios.post(
        `${api}/login`, userToCheck);
}
// add user
export function addUser(userToAdd: User) {
    return axios.post(`${api}/register`, userToAdd);
}
// get user by Id
export function getUserById(id: string) {
    return axios.get(`${api}/${id}`);
}
// get user profile
export function getUserProfile() {
    return axios.get(`${api}/profile`, {
        headers: { Authorization: JSON.parse(sessionStorage.getItem("userData") as string).token }
    })
}
// get isBusiness from token
export function getIsBusiness() {
    let token = JSON.parse(sessionStorage.getItem("userData") as string).token;
    return (jwt_decode(token) as any).isBusiness;
}
// get isLoggedIn from token
export function getIsLoggedIn() {
    let token = JSON.parse(sessionStorage.getItem("userData") as string).token;
    return (jwt_decode(token) as any).isLoggedIn;
}
// get userId from token
export function getUserId() {
    let token = JSON.parse(sessionStorage.getItem("userData") as string).token;
    return (jwt_decode(token) as any)._id;
}

// get My Cards
export function getMyCards() {
    return axios.get(`${api}/users`, { headers: { Authorization: JSON.parse(sessionStorage.getItem("userData") as string).token } });
}

export async function addCardToFavorites(cardId: string, user: User) {
    let myCards: string[] = user.myCards?.length ? [...user.myCards, cardId] : [cardId];
    try {
        return axios.patch(`${api}/${user.id}`, { myCards });
    } catch (error) {
        console.log(error);
    }
}

export function createMyCards(userId: string) {
    return axios.patch(`${api}/${userId}`, {
        myCards: [],
    });

}
export function removeFromFavorites(cardId: string, user: User) {
    let myCards = user.myCards;
    myCards?.splice(myCards?.indexOf(cardId as any), 1);
    return axios.patch(`${api}/${user.id}`, { myCards });
}