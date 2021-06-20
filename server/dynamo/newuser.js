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
        //  comm_id:data,user_name:name,home_pin:pin,user_phone:phone,user_email:email
        "user_id": id,"active_flag":true,"comm_id":req.body.comm_id,"user_name":req.body.user_name,"user_phone":parseInt(req.body.user_phone),"pin_code":req.body.home_pin, "created_on": new Date().toString(),"user_email":req.body.user_email
        
    };
    var params = {
        TableName: "Users",
        Item:  input
    };
    //user_email
    //check if user with that email already registered

    // docClient.getItem({Key:{user_phone:parseInt(req.body.user_phone)}},function(err,data){
    //     if(err) console.log(err);
    //     else console.log('user exist')

    // })
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));   
            res.json('You have already submitted')                   
        } else {
            console.log("users::save::success" );   
            res.json('User have been added successfully')                   
        }
    });
    
}
