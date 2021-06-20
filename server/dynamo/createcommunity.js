var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIASZTWQ7KUNNJL5LHE", "secretAccessKey": "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"
};

AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();


module.exports.save = (req,res)=>{
    var min = 100;
    var max = 99999999;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('got it')
    console.log(id)
    console.log(req.body,req.params)
    var input = {
        "comm_id": id,"comm_name":req.body.communityname,"comm_state":req.body.homestate,"comm_city":req.body.homecity,"pin_code":req.body.pincode, "created_on": new Date().toString(),"active":false,"admin_email":req.body.useremail,"comm_area":req.body.area
        
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
    res.json('community is under progress')
}
