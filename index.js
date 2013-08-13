module.exports = function (bodyObj, cp){  

  var request = require('request');


  baelishURL = 'ec2-54-227-182-120.compute-1.amazonaws.com';

  request.post({
    url: 'http://'+ baelishURL + ':8080/postgisdata',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(bodyObj)
  }, function(error, response, body){
    if (error) throw error;
    cp(body);
  });
}