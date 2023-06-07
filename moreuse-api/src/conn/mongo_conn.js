const mongoose = require('mongoose');

//const uri = 'mongodb://127.0.0.1:27017/db_moreuse';

const uri = process.env.CONNECTION_STRING;

const conn = async () => {
  await mongoose.connect(uri);
  console.log('Database Connection Running');
};

//en caso de no conexion
conn().catch(error => console.error('Database Connection failed ', error));


