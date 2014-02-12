module.exports = function (bodyObj, type, cb){

  var request = require('request');

  baelishURL = 'demo.crowdprocess.com';
  postgisURL = 'embers.crowdprocess.com/emberspsql';

  var URL;
  if (type === 'postgis')
    URL = 'http://'+ postgisURL + '/clcdata';
  else
    URL = 'http://'+ baelishURL + '/grassdata';

  request.post({
    url: URL,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bodyObj)
  }, function(error, response, body){
    if (error) cb (error, null);
    cb(null, body);
  });
};