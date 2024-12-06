const express = require('express');
const React = require('react');
const router = express.Router();
const Layout = require('../components/Layout')
const renderComponents = require('../renderComponents');


router.get('/', (req, res) => {
    const user = req.session.user || null; 
    const title = 'Главная страница';
  renderComponents(Layout ,{title, user, 
    children: 'Добро пожаловать на главную страницу!'}, res)
  
})
  module.exports = router;