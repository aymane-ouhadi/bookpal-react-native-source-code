export default cutText = (inputString, limit, fallback,) => {
    if(inputString == null){
        return fallback
    }
    if(inputString.length > limit) 
        return inputString.substring(0, limit) + '...'
    return inputString
}