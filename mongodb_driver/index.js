'use strict';

/** declaro las constantes
 * requiero el modulo de mongoClient
 * declaro la url de mi DB
 * delcaro el nombre de mi DB
 */
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'ejercicioNode'

/**
 * Utilizo el método para conectar con la db
 */
MongoClient.connect(url, (error, database) => {
  if (error) return process.exit();
  console.log('Connection is okay');

  const db = database.db(dbName);
  db.collection('agentes').find().toArray(function(err, docs){
     
      console.log(docs);
  })
  database.close();
  
});