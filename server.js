  var path = require('path');
  var express = require('express');


  var app = express();



  app.use(express.static(path.join(__dirname, 'public')));

  app.listen(process.env.PORT || 3000);

  console.log('server started on port: ', process.env.PORT || 3000);