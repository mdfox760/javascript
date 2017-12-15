//Node.js can fire events like readStream opening and closing a file.
var fs = require('fs');

var rs = fs.createReadStream('.demofile.txt');

/*Write to the console when the file is opened:*/
rs.on('open', function () {
	console.log('The file is open');
});