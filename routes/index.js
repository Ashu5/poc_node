var express = require('express')
var app = express()

app.get('/', function (req, res) {
	// render to views/index.ejs template file
	res.send('Global Fund Backend API ');
})


app.get('/players',function(req,res){

	var players=[{
		name:"Sachin",
		country:"India",
		type:"Batsman"
	},
	{name:"kohli",
	country:"India",
	type:"Batsman"}
];

res.send(players);
});


app.get('/getdata', function (req, res) {
	req.getConnection(function (error, conn) {
		if (!error) {
			conn.query('SELECT * FROM gfdata ORDER BY reportId  DESC', function (err, result) {
				//if(err) throw err
				if (err) {
					console.log(err);

				} else {
					res.send(result);
					console.log(result);

				}
			})
		} else {
			console.log("error in getting data");
		}

	})
})


// ADD NEW USER POST ACTION
app.post('/insertdata', function (req, res) {

	var data = req.body;
	var element;
	req.getConnection(function (error, conn) {



		if (!error) {

			conn.query('DELETE FROM gfdata', function (err, result) {
				//if(err) throw err
				if (err) {
					console.log("err");
				} else {
					for (var i = 0; i < data.length; i++) {
						element = data[i];
						conn.query('INSERT INTO gfdata SET ?', element, function (err, result) {
							//if(err) throw err
							if (err) {
								console.log("err");
							} else {
								console.log("data inserted" + i);
								console.log("data" + data.length);

								if (i == data.length) {
									console.log("done")
									res.end("Success");

								}
							}
						})
					}
				}
			})




		} else {

			console.log("Error in DB")
		}

	})


})

/** 
 * We assign app object to module.exports
 * 
 * module.exports exposes the app object as a module
 * 
 * module.exports should be used to return the object 
 * when this file is required in another module like app.js
 */
module.exports = app;
