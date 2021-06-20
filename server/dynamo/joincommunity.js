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
    // "comm_id": id,"comm_name":req.body.communityname,"home_state":req.body.homestate,"home_city":req.body.homecity,"pincode":req.body.pincode, "created_on": new Date().toString(),
    

    var params = {
        TableName: "Communities",
        Key:{
            "comm_id":parseInt(req.body.id)
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::save::success" + JSON.stringify(data, null, 2));    

            console.log(data.Item.comm_id,data.Item.pincode,data);     
            if(data.Item.comm_id==undefined)
            {
             res.json('Community ID not exist')
            }    
            else{
                if(data.Item.pin_code==req.body.pin)
                {
                    res.json('You have been invited successfully')
                }
                else{
                    res.json('Invalid Pincode')
                }
            }
            
        }
    });
}
