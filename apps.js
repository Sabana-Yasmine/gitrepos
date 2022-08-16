// Operating system module

var os = require('os');

console.log("CPU architechtur:"+ os.arch());

console.log("Free Memory:"+ os.freemem());

console.log("Total Memory:"+ os.totalmem());

console.log("List of network interfaces:"+ os.networkInterfaces());

console.log("Default directory for temporary files:"+ os.tmpdir());

console.log("cpu status:"+ os.cpus());

