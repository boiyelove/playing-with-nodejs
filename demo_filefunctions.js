var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello Content!', function(err){
	if (err) throw err;
	console.log('Saved!');
});

fs.open("mynewfile2.txt", "w", function(err, file){
	if (err) throw err;
	console.log('Saved!');
});

fs.writeFile("mynewfile3.txt", 'Hello Content', function(err){
	if (err) throw err;
	console.log('Saved!');
});

fs.unlink('mynewfile3.txt', function(err){
	if (err) throw err;
	console.log('File Deleted');
});

fs.rename('mynewfile1.txt', 'myrenamedfile1.txt', function(err){
	if (err) throw err;
	console.log('File Renamed!');
})