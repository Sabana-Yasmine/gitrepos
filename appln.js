// Express Module

const express = require('express');
const appln=express();
const bodyparser = require('body-parser');
const cors = require('cors');

appln.use(bodyparser.urlencoded({extended:true}));//used for security purpose  
appln.use(bodyparser.json());//to use json object file
appln.use(cors());//used for restriction options 

// to create a server
appln.listen(8081,()=>
{
    console.log('server created');
})

//api to get data
let data = []
appln.get('/getdata',(req,res)=>
{
    const key =req.query.name
     
    for(let i=0 ; i<data.length ; i++){
        if(data[i]===key)
        res.status(200).json({status:true,data:data[i],message:'successfully got data'});
     }
     }
)

appln.post('/postdata',(req,res)=>
{
  data.push(req.query);
  console.log(data)
  res.status(200).json({status:true});
})

/*appln.delete('/deletedata',(req,res)=>
{
    (req.query);
    console.log(data)
    res.status(200).json({status:true});
})
*/










