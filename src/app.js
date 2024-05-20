const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 

app.get('/restaurants', async (req, res)=>{
    const restaurant = await Restaurant.findAll({})
        res.json(restaurant)
    
})

app.get('/restaurants/:id', async (req, res)=>{
    const restaurant = await Restaurant.findByPk(req.params.id)
        res.json(restaurant)
    
})

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.post('/restaurants/:id', async (req, res)=>{
        const restaurant = await Restaurant.create(req.body)
        res.json(restaurant)
    
})

app.put('/restaurants/:id', async (req, res)=>{
    const updatedrestaurant = await Restaurant.update(req.body, {where: {id: req.params.id}})
    res.json(updatedrestaurant)

})

app.delete('/restaurants/:id', async (req, res)=>{
    const deletedrestaurant = await Restaurant.destroy({where: {id: req.params.id}})
    res.json(deletedrestaurant)

})

module.exports = app;