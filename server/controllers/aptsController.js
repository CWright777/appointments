var mongoose = require('mongoose');

var Apt = mongoose.model('Apt');

module.exports = {
  index: function(req,res){
    Apt.find({},function(err,apts){
      res.json(apts);
    })
  },
  create: function(req,res){
    var newApt = new Apt(req.body)
    newApt.save(function(err){
      if(err){
        console.log(err);
      } else {
        res.json(newApt);
      }
    })
  },
  destroy: function(req,res){
    Apt.remove({_id: req.params.id}, function(err, apts){
      if(err){
        console.log(err);
      } else {
        res.json(apts)
      }
    })
  }
}
