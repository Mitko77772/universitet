let data = [10 , 11, 7, 56, 10, 25, 10, 10]

const modifiedArray = data.map(element => {
    if(element === 7) {
        element = 17;;
    }
    return element;
} )

//console.log(modifiedArray);

const filteredData = data.filter(element => {return element >= 12;})
//console.log(filteredData);

const foundElement = data.find(element => {
    return element === 10;
})
console.log(foundElement);