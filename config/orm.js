// Import MySQL connection.
var connection = require("../config/connection.js");

// var orm = {
    
//     selectAll: function(req, res) {
//         connection.query("SELECT * FROM burgers;", function(err, data) {
//           if (err) throw err;
      
            
//           res.render("index", { tasks: data });
//         });
//       },





//     insertOne: function(whatToSelect, table, orderCol) {
//       var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
//       console.log(queryString);
//       connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
//         if (err) throw err;
//         console.log(result);
//       });
//     },
//     updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
//       var queryString =
//         "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
  
//       connection.query(
//         queryString,
//         [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
//         function(err, result) {
//           if (err) throw err;
//           console.log(result);
//         }
//       );
//     }
//   };
  
var orm = 
{

	//selectAll()

	selectAll: function(callback) 
	{
		//mySQL Query
		connection.query('SELECT * FROM burgers', function(err, result)
		{
			if (err) throw err;
			callback(result);
		});
	},

	//insertOne()
	insertOne: function(burger_name, callback)
	{
		connection.query('INSERT INTO burgers SET ?', 
			{	burger_name: burger_name,
				devoured: false,
			}, function(err, result)
			{
				if (err) throw err;
				callback(result);
			});
				
	},

	//updateOne()
	updateOne: function(burgerID, callback)
	{
		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}],
			function(err, result)
			{
				if (err) throw err;
				callback(result);
			});
	}
};


// Export the orm object.
module.exports = orm;