
function findMin(x, y, z) {
    let miniimum = Math.min(x, y, z)
    return miniimum;
}

console.log(findMin(246, 95, 155));

//  
function IntegerAndRational(realNumbers) {
    if (realNumbers%6 == 26/45){
        return `${realNumbers} integer numbers.`; 
    }else {
        return`${realNumbers} rational numbers.`;
    }
}
console.log('IntegerAndRational(number)');


// Returns a random integer from 1 to 10:

function randomEx() {
    let ex1 = Math.floor(Math.random() * 10) + 1;
    let ex2 = Math.floor(Math.random() * 10) + 1;
    let ex3 = Math.floor(Math.random() * 10) + 1;
    
    return ex1 + "." + ex2 + "." + ex3 + ".";
}

console.log(randomEx());





let name = prompt("Write your name here!").toLowerCase();
let surname = prompt("Write your surname here!").toLowerCase();
let myAge = prompt("write your age").toLowerCase();
function fullName(firstName, secondName, age) {
    return `${firstName} ${secondName} ${myAge} ${firstName.length + secondName.length+myAge.length} Karakter`
}
console.log(fullName(name, surname, myAge))

function doluAdy(firstName1) {
    let endCharacter = firstName1[firstName1.length - 1];
    if (endCharacter == "s") {
        return `${firstName1}'dan Sevgilerle`;
    } else if (endCharacter == "a"){
        return `${firstName1}'den Saygilarla`;
    }else if (endCharacter == "k"){
        return `${firstName1}'tan Sevgilerle`; 
    } else{
        return `${firstName1}'ten saygilarimizla`;
    }
    
}
console.log(doluAdy('Name'))
  

  function example(value1, value2) { //BU ORNEGE TEKRAR BAK
      let firstYears = 3*26;
      let lastYears = (value2 - 2) * 4 ;
      let totalYears = firstYears + lastYears;
      document.write(`<h4>${value1}, age your doc ${totalYears}</h4>`) //
        return `${value1}, age your doc ${totalYears}`
    }

  //example ("Merjen", 30);

  let result = example ("Merjen", 30)

  console.log(result)