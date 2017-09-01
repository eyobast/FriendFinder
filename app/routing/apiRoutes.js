
var path = require("path");

var friendsList =require("../data/friends.js");

module.exports = function(app) {

    //read documentation for fs
    //read documentation for express response methods

    app.get("/api/friends", function(request, response) {
        response.json(friendsList);
       
    });

    app.post("/api/friends", function(request, response) {
       friendsList.push(request.body);
       var newFriendScores = req.body.scores;
    	var scoresArray = [];
    	var friendCount = 0;
    	var bestMatch = 0;

       var totalDiff = 0;

       for (var i = 0; i < friendsList.length; i++) { //to loop through friendsList array
       //console.log(friendsList[i].scores.length);
       	for (var j = 0; j < friendsList[i].scores.length; j++) { //to loop through object.scores
       		//compare request.body.scores and object.scores
       		//add to totalDiff
       		totalDiff+= (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
       		
       	friendsList.push(friendsList[i].scores.length);
       	console.log(friendsList);

       	}
       }

    });

};