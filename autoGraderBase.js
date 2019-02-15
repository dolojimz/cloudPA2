var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
const { exec } = require('child_process');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        exec('python3 exec.py', (err, stdout, stderr) => {
              if (err) {
                // node couldn't execute the command
                return;
              }

              // the *entire* stdout and stderr (buffered)
              res.write(`Output of student grade: `);
              res.write(`${stdout}`);
              res.end();
        });
    });
  } else {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        res.end();
    });
  }
}).listen(8080);
