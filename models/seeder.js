var Idade = require('./Idade.js');
var Doenca = require('./Doenca.js');
var Aplicacao = require('./Aplicacao.js');
var Vacina = require('./Vacina.js');
var Local = require('./Local.js');
var User = require('./User.js');
var seeder = require('mongoose-seeder');
var data = require('./seed.json');
var aplicacoes_data = require('./seeder_aplicacoes.json');
var locations_data = require('./seeder_location.json');
var users_data = require('./seeder_users.json');
var mongoose = require('mongoose');

//Dont forget to add: db.applica.createIndex({"location": "2dsphere"})

var seed = function(){
  console.log('-------------\nApplying seeds...');

  Doenca.remove({}, function(){
    console.log("database Doenças deletado com sucesso!");
  });

  Local.remove({}, function(){
    console.log("database Local deletado com sucesso!");
  });

  Aplicacao.remove({}, function(){
    console.log("database Aplicacoes deletado com sucesso!");
  });

  seeder.seed(aplicacoes_data).then(function(dbData){
    console.log("aplicacoes seed com sucesso!");
  }).catch(function(err){
    console.log("erro ao inserir aplicacoes: " + err);
  });

  seeder.seed(users_data).then(function(dbData){
    console.log("users seed com sucesso!");
  }).catch(function(err){
    console.log("erro ao inserir users: "+ err);
  });

  seeder.seed(locations_data).then(function(dbData){
    console.log("locais seeded com sucesso!");
  }).catch(function(err){
    console.log("erro ao inserir locais: " + err);
  })

  seeder.seed(data).then(function(dbData){
    console.log("seeded com sucesso!\n------------");

    //** Find Vacinas by idade exemplo:
    // Idade.find({idade: 0}, function(err, idade){
    //   Vacina.find({idades_dose: { $elemMatch: {$in: idade }}}, function(err, vacinas){
    //     console.log(vacinas);
    //   })
    // });

  }).catch(function(err){
    console.log("erro ao inserir: " + err);
  });

}

module.exports = seed;
