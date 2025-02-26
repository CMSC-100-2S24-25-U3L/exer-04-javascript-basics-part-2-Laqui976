import validator from "validator";
import { v4 as uuidv4 } from "uuid";
import { openSync, closeSync, appendFileSync } from 'node:fs';


export function generateUniqueID(firstName, lastName) {
  var fname = firstName.toLowerCase(); //get first letter of firstName
  var random = uuidv4().substring(0,8); //get random alphanumeric cut to 8 char

  var uniqueID = fname.charAt(0) + lastName.toLowerCase() + random; //combine
  return uniqueID;
}


export function addAccount([firstName, lastName, email, age]){
    if(firstName.length ===0 && lastName.length ===0 && email.length ===0 && age === null){//cgeck if empty
        return "Cannot have an empty string";
    }else{
        if(age>18 && validator.isEmail(email)){//validate age and email
            let fd;
            var id = generateUniqueID(firstName, lastName);
            const data = '${firstName}, ${lastName}, ${email}, ${age}, ${id}\n';
                try {
                fd = openSync('users.txt', 'a');
                appendFileSync(fd, data , 'utf8');
                } catch (err) {
                    console.log(err);
                } finally {
                if (fd !== undefined)
                    closeSync(fd);
                } 
                           
        }
    }
}

