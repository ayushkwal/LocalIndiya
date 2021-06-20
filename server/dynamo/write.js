   
var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIASZTWQ7KUNNJL5LHE", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

    save = function () {

    var input = {
        "comm_id": 78954, "created_by": "clientUser", "created_on": new Date().toString(),
        
    };
    var params = {
        TableName: "Communities",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::save::success" );                      
        }
    });
}

save();