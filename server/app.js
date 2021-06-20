const express = require('express');
const app = express();
// const {save} = require('./dynamo/write')
const joincommunity = require('./dynamo/joincommunity')
const makecommunity = require('./dynamo/createcommunity')
const newuser = require('./dynamo/newuser')
const checkuser = require('./dynamo/checkuser')
const submitmsg = require('./dynamo/savemsg')
const showmsg = require('./dynamo/showmsg')
const sendcomment  = require('./dynamo/sendcomment');
const fetchcomment = require('./dynamo/fetchcomment')

app.use(express.json())


app.get('/', (req, res) => res.send('hey'))

app.post('/submitmsg', submitmsg.save);

app.post('/joincommunity', joincommunity.save)

app.post('/createcommunity', makecommunity.save)

app.post('/newuser', newuser.save)

app.post('/viewmsg', checkuser.save);

app.post('/showmsg',showmsg.save)


app.post('/sendcomment',sendcomment.save)


// app.post('/fetchcomment',fetchcomment.save)



// app.listen(3000, '127.0.0.1', () => {
//   console.log(`Server running `);
// });

module.exports = app;