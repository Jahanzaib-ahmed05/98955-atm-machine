#!/usr/bin/env node


import inquirer from "inquirer";

let balance = 10000;
let myPin = 2345;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("you entered correct pin!!");

 let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["withdraw", "check balance","fastcash"],
    }
  ]
);
  console.log(operationAns.operation);

  if(operationAns.operation=== "fastcash") {
      let fastcash = await inquirer.prompt(
        [
          {
             name:"option",
             message: "please select an option",
             type: "list",
             choices:["1000","3000","5000","8000","10000"],
          }
        ]
      );
      console.log(fastcash);

      balance =balance - fastcash.option;
      console.log("Your Remaining Balance is : "+ balance);
      
  }
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
    ]);
     if(amountAns.amount > balance){

    console.log ("insufficiet balance!!");

  }else{

    balance =balance - amountAns.amount;

    console.log("your remaining balance is : " + balance);
  }
}

else if(operationAns.operation === "check balance")
console.log ("your blance is"+ balance);
 
}else{
    console.log("Incorrect pin code");
}

