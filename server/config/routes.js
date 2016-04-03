var Apts = require('../controllers/aptsController.js');

module.exports = function(app){
  app.post('/users',function(req,res){
    Users.create(req,res);
  })
  app.get('/appointments', function(req,res){
    Apts.index(req,res);
  })
  app.post('/appointments',function(req,res){
    Apts.create(req,res);
  })
  app.delete('/appointments/:id', function(req,res){
    Apts.destroy(req,res);
  })
};
