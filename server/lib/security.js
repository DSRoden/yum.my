'use strict';

var User = require('../models/user');

exports.authenticate = function(req,res, next){
  User.findById(req.session.userId, function(err, user){
    req.user = user;
    res.setHeader('X-Authenticated-User', user ? user.email : 'anonymous');
    next();
  });
};
