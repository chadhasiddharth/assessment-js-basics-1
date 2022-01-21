
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

console.log("Welcome to the password validator tool")

readline.question('please enter your password to validate', password => {
   if(password.length >= 10){
       console.log("Your password meets the criteria")
   }else{
       console.log("Your password doesn't meet the criteria")

   }

    //console.log(`${password}!`);
    readline.close();
  })

