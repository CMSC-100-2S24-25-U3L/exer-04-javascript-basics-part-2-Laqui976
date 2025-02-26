import validator from "validator";
import { v4 as uuidv4 } from "uuid";

function generateUniqueID(firstName, lastName) {
  var fname = firstName.toLowerCase(); //get first letter of firstName
  var random = uuidv4().substring(0,8); //get random alphanumeric cut to 8 char

  var uniqueID = fname.charAt(0) + lastName.toLowerCase() + random; //combine
  return uniqueID;
}


console.log(generateUniqueID("Alan", "Turing"));

