var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "AKIASZTWQ7KUNNJL5LHE", "secretAccessKey": "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"
};

AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();
let dynamodb = new AWS.DynamoDB();


//                id,comment,msg:navigation.getParam('description'),sender:navigation.getParam('name')



module.exports.save = (req,res)=>{
   
    console.log(req.body,req.params)
    var input = {
        //  comm_id:data,user_name:name,home_pin:pin,user_phone:phone,user_email:email   id,comment,msg:navigation.getParam('description'),sender:navigation.getParam('name')
        // "Msg_flag":true,"Msg_comm_id":parseInt(req.body.comm_id),"Msg_posted_by":req.body.email,"Msg_label":req.body.title,"Msg_content":req.body.description, "Msg_date_time": new Date().toString()
       "comment":req.body.comment,"comment_on_msg":req.body.msg, "user_email":req.body.sender,"active_flag":true,"comm_id":req.body.id.toString(),"created_on":new Date().toString()
        
    };
    var params = {
        TableName: "Comments",
        Item:input
       
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));   
            res.json({error:'Something wedddnt wrong'})                   
        } else {
            console.log("users::save::success",data );   
            res.json({success:'Message posted successfully'})                   
        }
    });
    
}
