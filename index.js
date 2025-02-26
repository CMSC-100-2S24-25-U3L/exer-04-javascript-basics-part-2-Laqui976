import validator from "validator";
import { v4 as uuidv4 } from "uuid";

function generateUniqueID(firstName, lastName) {
  var fname = firstName.toLowerCase(); //get first letter of firstName
  var random = uuidv4().substring(0,8); //get random alphanumeric cut to 8 char

  var uniqueID = fname.charAt(0) + lastName.toLowerCase() + random; //combine
  return uniqueID;
}


console.log(generateUniqueID("Alan", "Turing"));

function addAccount([firstName, lastName, email, age]){
    if(firstName.length ===0 && lastName.length ===0 && email.length ===0 && age === null){
        return "Cannot have an empty string";
    }else{
        if(age>18 && validator.isEmail(email)){
            return true;
        }
    }
}

console.log(addAccount(['Alan', 'Turing', 'aturing@w3c.com', 58]));