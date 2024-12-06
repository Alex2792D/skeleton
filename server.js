require('dotenv').config();
require('@babel/register');
const express = require('express');
const path = require('path');
const db = require('./db/models/index');
const app = express();
const PORT = process.env.PORT || 3000;
const serverConfig = require('./serverConfig');


serverConfig(app)


async function testConnection() {
    try {
      await db.sequelize.authenticate(); 
      console.log('БД подключена успешно');
    } catch (error) {
      console.log('Ошибка подключения к БД', error.message);
    }
  }
  testConnection();


  app.listen(PORT, () => {
    console.log(`*** Server started at ${PORT} port ***`);
  });