module.exports = function (bodyObj, type, cb){

  var request = require('request');

  var baelishURL = 'demo.crowdprocess.com';
  var postgisURL = 'embers.crowdprocess.com/emberspsql';

  var URL;
  if (type === 'postgis')
    URL = 'https://'+ postgisURL + '/clcdata';
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