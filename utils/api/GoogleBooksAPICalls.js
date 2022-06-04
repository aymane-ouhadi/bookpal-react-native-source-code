import Axios from "axios"

//constants
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='

//Validating the ISBN
// const isISBNValid = (isbn) => {

//     isbn = isbn.replace(/[^\dX]/gi, '');
  
//     if(isbn.length != 10){
  
//       return false;
  
//     }
  
//     var characters = isbn.split('');
  
//     if(characters[9].toUpperCase() == 'X'){
  
//       characters[9] = 10;
  
//     }
  
//     var sum = 0;
  
//     for (var i = 0; i < characters.length; i++) {
  
//       sum += ((10-i) * parseInt(characters[i]));
  
//     };
  
//     return ((sum % 11) == 0);
  
//   }
const isISBNValid = (isbn) => {     
  // length must be 10
  let n = isbn.length;
  if (n != 10)
      return false;

  // Computing weighted sum of
  // first 9 digits
  let sum = 0;
  for (let i = 0; i < 9; i++)
  {
      let digit = isbn[i] - '0';
          
      if (0 > digit || 9 < digit)
          return false;
              
      sum += (digit * (10 - i));
  }

  // Checking last digit.
  let last = isbn[9];
  if (last != 'X' && (last < '0' || last > '9'))
      return false;

  // If last digit is 'X', add 10
  // to sum, else add its value.
  sum += ((last == 'X') ? 10 : (last - '0'));

  // Return true if weighted sum
  // of digits is divisible by 11.
  return (sum % 11 == 0);
}

//Get Book By ISBN
export const getBookByISBN = async (ISBN) => {
    //Axios Call
    const {data: {items}} = await Axios.get(API_URL + `isbn:${ISBN}`)
    return items[0]
}

//Get Multiple Books By ISBN
export const getISBNFromLink = (link) => {
    const isbn = link.split('?')[1]
                    .split('&')[1]
                    .split('=')[1]
                    .split(':')[1]
    return isbn
}

//Get Multiple Books By ISBN
export const getMultipleBooksByISBN = async (...ISBN) => {
    const promises_array = []
    //Axios Call
    ISBN.forEach((bookISBN) => {
        if(isISBNValid(bookISBN)){
            const res = Axios.get(API_URL + `isbn:${bookISBN}`)
            promises_array.push(res)
        }
    })
    const res = await Promise.all(promises_array)
    // return res.map(({data: {items}}) => {
    //     if(items){
    //         return ({
    //             ...items[0],
    //             volumeInfo: {
    //                 ...items[0].volumeInfo,
    //                 ISBN: getISBNFromLink(items[0].volumeInfo.previewLink)
    //             }
    //         })
    //     }
    // })
    return res.reduce((result, {data: {items}}) => {
        if(items){
           result.push({
                ...items[0],
                volumeInfo: {
                    ...items[0].volumeInfo,
                    ISBN: getISBNFromLink(items[0].volumeInfo.previewLink)
                }
           }) 
        }
        return result
    }, [])
}