export default cutText = (inputString, limit) => {
    if(inputString.length > limit)
        return inputString.substring(0, limit) + '...'
    return inputString
}