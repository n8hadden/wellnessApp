function getDate24HRAhead(dateAsInt){
    return dateAsInt + 86400000;
}

function isPastDay(checkDate, constantDate){
    return checkDate > constantDate;
}

module.exports = {
    getDate24HRAhead,
    isPastDay
}