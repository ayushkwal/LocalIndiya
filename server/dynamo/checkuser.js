var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIASZTWQ7KUNNJL5LHE", "secretAccessKey": "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"
};

AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();


module.exports.save = (req,res)=>{
    console.log('got it')
    console.log(req.body,req.params)
    

    var params = {
        TableName: "Users",
        Key:{
            "user_email":req.body.email
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            res.json({error:'Something Went Wrong'})                  
        } else {
            console.log("users::save::success" + JSON.stringify(data, null, 2));    
            console.log(data)
            res.json({comm_id:data.Item.comm_id})
            
        }
    });
}
