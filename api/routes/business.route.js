//? Write the CRUD code in this file
const express = require('express'),
app = express(),
businessRoute = express.Router();

//? add the business model
let Business = require('../models/Business'); 

//? definition of routes
businessRoute.route('/add').post(function(req, res){
    let business = new Business(req.body);
    business.save().then(business => {
        res.status(200).json({'business':'business added successfully'});
    }).catch(err => {
        res.status (400).send('Unable to connect');
    });
});

//? get route
businessRoute.route('/').get(function(req, res){
    Business.find(function(err, business){
        if(err){
            console.log(err);
        }
        else{
            res.json(business);
        }
    });
});

//? edit:id
businessRoute.route('/edit/:id').get(function(req, res){
    let id = req.params.id;
    Business.findById(id, function(business){
        res.json(business);
    });
});

//? update:id
businessRoute.route('/update/:id').post(function(req, res){
    Business.findById(req.params.id, function(err, business){
        if(!business){
            return new Error('Could not load document!');
        }
        else{
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.business_reg_num = req.body.business_reg_num;
            business.save().then(business => {
                res.json("Update successful");
            }).catch(err => {
                res.status(400).send('Unable to update!');
            });
        }
    });
});

businessRoute.route('/delete/:id').get(function (req, res) {
    Business.findById(req.params.id, function(err, business){
        if(business){
            Business.remove({_id: req.params.id}, (err) => {
                if(err) res.json(err);
                else {
                    res.json("Successfully removed");
                }
            });
        }
    });
});

module.exports = businessRoute;