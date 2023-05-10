const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//para que reconozca el body de las url
app.use(bodyParser.urlencoded({extended:false}));
//para que el body de las url lleguen en formato json
app.use(bodyParser.json());

//levanta el servidor
app.listen(port, () => {
  console.log('Server runing on port ' + port);
});


