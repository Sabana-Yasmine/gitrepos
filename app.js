//File system module

var fs = require("fs");
 fs.appendFile('input.txt','File readed',(err)=>{
    if(err) throw err
    console.log('File appended');
 });

 fs.open('input.txt','w',function(err,file){
    if(err) throw err;
    console.log('File opened');
 });

fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log(data.toString());
});

fs.writeFile('input.txt','new content',function(err){
    if(err) throw err;
    console.log('written on the file');
});

fs.unlink('input.txt',function(err){
    if(err) throw err;
    console.log('file deleted');
});