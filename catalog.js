/*Goal:
In the world of software, before building a full feature, you 
start with an MVP. You've been tasked to develop the MVP for a 
product catalog. This catalog allows a user to add a 
product's name, model, cost and quantity to the inventory. 
The maximum items they can add is 5.
An approach:
Create an array to hold the inventory (this will be mutable, 
think `let`) With a loop, check for the size of your array
Ask and add items to array
Show the user the content with an alert or if 
you're adventurous, add to the HTML body.*/

// Created array variables
let productName = [];
let productModel = [];
let productCost = [];
let productQuantity = [];
let exit = 0;

// Input inventory
let count = 0;

do{
  productName[count] = prompt(`Product ${count+1}. Input product name: `);
  productModel[count] = prompt(`Product ${count + 1}. Input product model: `);
  productCost[count] = prompt(`Product ${count + 1}. Input product cost: `);
  productQuantity[count] = prompt(`Product ${count + 1}. Input product quantity: `);
  if(count < 4)
  {  
    exit = prompt(`Do you want to exit (press 'y' for exit or press any key to continue input)`);
  }
  count++;
} while(count < 5 && exit != 'y');


// Display inventory

let count1 = 0;
let inventoryList = 'List of the inventory: \n';

while(count1 < count)
{
  inventoryList += `Product ${count1+1}:\nName: ${productName[count1]}\nModel: ${productModel[count1]}\nCost: ${productCost[count1]}\nQuantity: ${productQuantity[count1]}\n\n`;
  count1++;
}

alert(inventoryList);