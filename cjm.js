exports.sum = (x, y)=>{
    return x+y;
}

const getFullName = (firstname, surname) => {
    return firstname + ' ' + surname;
}

exports.multiply = (x,y)=>{
    return x*y;
}


module.exports = {
    getFullName
}