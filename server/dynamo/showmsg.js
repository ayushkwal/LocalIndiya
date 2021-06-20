var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIASZTWQ7KUNNJL5LHE", "secretAccessKey": "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"
};

AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();
var dynamodb = new AWS.DynamoDB();

module.exports.save = (req,res)=>{
    console.log('got it')
    console.log(req.body,req.params)
    console.log('..........',req.body.comm_id);
    const val = parseInt(req.body.comm_id);

    var params = {
    ExpressionAttributeValues: {
        ":v1": {
          N: val.toString()
         }
       }, 
       KeyConditionExpression: "Msg_comm_id = :v1", 
       TableName: "Messages"
        
      
    };
    dynamodb.query(params, function (err, data) {
        if (err) {
            console.log(err)
            res.json({error:'Something Went Wrong'})                  
        } else {                                    
            console.log("message detected----------------------------------------------------------------" + JSON.stringify(data, null, 2));    
            console.log(data)
            res.json({data})
            
        }
    });
}
