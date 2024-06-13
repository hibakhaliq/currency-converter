import {log} from 'console';
import inquirer from 'inquirer'
let currencyconverter = {
    "USD":{
        "USD": 1,
        "GBP": 0.79,
        "PKR": 278

    }, "GBP":{
        "USD":1.27,
        "GBP":1,
        "PKR":354.46 },

        "PKR":{
            "USD":0.0036,
            "GBP":0.0028 ,
            "PKR":1
        }

    }
    //INPUT PROMPT
    const answer: {
        from: "USD" | "GBP" | "PKR",
        to: "USD" | "GBP" | "PKR",
        amount : number,
    } = await inquirer.prompt(
        [
            {
                name: "from",
                message: "Enter the currency you want to convert?",
                type: "list",
                choices:["USD","GBP","PKR"]
            },
                { name: "to",
                message: "Select the country you want to convert into?",
                type: "list",
                choices:["USD","GBP","PKR"] }, {
                     
                name: "amount",
                message: "Select your amount in numbers",
                type: "number",
                choices:["USD","GBP","PKR"]
                }
        ]
    )
    const {from,to,amount} = answer;
    // conversion
    if(from && to && amount){
        let result =currencyconverter[from][to] * amount;
        console.log(`Your conversion from ${from} to ${to} is ${result}`)
    }else{
        console.log("Invalid oprator select");
    }
