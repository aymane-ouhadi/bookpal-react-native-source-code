import Axios from "axios"

//constants
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='

//Get Book By ISBN
export const getBookByISBN = async (ISBN) => {
    //Axios Call
    const {data: {items}} = await Axios.get(API_URL + `isbn:${ISBN}`)
    return items[0]
}