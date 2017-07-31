var mysql = require('mysql');
var inquirer = require('inquirer');

//db connection
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user:'root',
	password:'Rh73032!',
	database: 'bamazon'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("");
});

//run query to show inventory
connection.query("SELECT itemID, itemName, price, stockQuantity FROM products", function(err, res) {

    for (var i = 0; i < res.length; i++) {
        console.log("ID: " + res[i].itemID + " | " + "Product: " + res[i].itemName + " | " + "Price: " + res[i].price + " | " + "QTY in Stock: " + res[i].stockQuantity);
        console.log('--------------------------------------------------------------------------------------------------')
    }
    console.log("");
    launchApp();
});

var launchApp = function (){

	inquirer.prompt([{
		name:"id",
		type: "input",
		message: "which item would you like to buy? (Please use item ID)",
		validate: function(value){
			if (isNaN(value) === false && value <=10){
				return true;
			} else {
				return false;
			}
		}
	}, {
		name:"quantity",
		type:"input",
		message:"How many would you like to purchase?",
		validate: function(value){
			if (isNaN(value)){
				return false;
			} else {
				return true;
			}
		}
	}
	]).then(function(answer){
	var query = "SELECT department, stockQuantity, price FROM products WHERE ?"
        connection.query(query, { itemID: answer.id }, function(err, res) {

            if (res[0].stockQuantity >= answer.quantity) {

                var dept = res[0].department;
                var adjustedQuantity = res[0].stockQuantity - answer.quantity;
                var purchasePrice = (answer.quantity * res[0].price).toFixed(2);

                var query2 = " UPDATE products SET ? WHERE ?";
                connection.query(query2, [{ stockQuantity: adjustedQuantity }, { ItemID: answer.id }],

                    function(err, res) {

                        if (err) throw err;
                        console.log("Success! Your total is $" + purchasePrice);
                        launchApp();
                    });
       		 }
    	});// connection query
	})// end of query for function(answer)
}//end of launchApp
