/* const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, (err, db) => {
	    if (err) throw err;
	    db.collection('case_thyroid').find({}).count((err, result) => {
    if (err) throw err;
    console.log(result);
    thyroid_size = result;
    thyroidPoids(thyroid_size, 20);
    db.close();
  });
});


function thyroidPoids(thyroid_size, k) {
  var k = 20;
  let i = 0;
  const n = 800;
  const newObj = JSON.parse('{ "T3": 0, "Thyro":0, "Trido":0,"TSH":0,"TS":0}');
  MongoClient.connect(url, (err, db) => {
    const count = db.collection('case_thyroid').find({}, { validity: false, nb_occurence: false, date_maj: false }).toArray((err, allData) => {
      if (err) throw err;

	    	// console.log(allData);

		    var obj = JSON.parse('{ "T3": 0, "Thyro":0, "Trido":0,"TSH":0,"TS":0}');
		    console.log(`thyroid_size: ${thyroid_size}`);
		    let loo;
      for (loo = 0; loo < n; loo++) {
			    const T3s = [];
			    const Thyros = [];
			    const Tridos = [];
			    const TSs = [];
			    const TSHs = [];


			    i = 0;
        do {
          // choisir aléatoirement une instance de case_cancer
          do {
            var randomObject = Math.floor(Math.random() * thyroid_size - 1);
          }
          while (randomObject < 0 || randomObject >= thyroid_size);

          i++;
          // console.log("i= "+i+"andomObject: "+randomObject);
          var obj = allData[randomObject];
          // console.log(allData[i]);

			        const T3 = Math.abs(allData[i].problem.T3 - obj.problem.T3) / Math.max(allData[i].problem.T3, obj.problem.T3);
          const Thyro = Math.abs(allData[i].problem.Thyro - obj.problem.Thyro) / Math.max(allData[i].problem.Thyro, obj.problem.Thyro);
          const Trido = Math.abs(allData[i].problem.Trido - obj.problem.Trido) / Math.max(allData[i].problem.Trido, obj.problem.Trido);
			        const TSH = Math.abs(allData[i].problem.TSH - obj.problem.TSH) / Math.max(allData[i].problem.TSH, obj.problem.TSH);
			        const TS = (allData[i].problem.TS == 0 && obj.problem.TS == 0) ? 0 : Math.abs(allData[i].problem.TS - obj.problem.TS) / Math.max(Math.abs(allData[i].problem.TS), Math.abs(obj.problem.TS));
			        if (isNaN(TS)) { console.log(`i: ${i}, loo: ${loo}, ${allData[i].problem.TS}, ${obj.problem.TS}, res: ${TS}`); }

			        T3s[i] = T3;
			        Thyros[i] = Thyro;
			        Tridos[i] = Trido;
			        TSHs[i] = TSH;
			        TSs[i] = TS;
		    	} while (i < thyroid_size - 1);
		    	T3s.sort(); newObj.T3 = (newObj.T3 - voisins(k, T3s) + antivoisins(k, T3s, thyroid_size)) / (2 * k);
		    	Thyros.sort(); newObj.Thyro = (newObj.Thyro - voisins(k, Thyros) + antivoisins(k, Thyros, thyroid_size)) / (2 * k);
		    	Tridos.sort(); newObj.Trido = (newObj.Trido - voisins(k, Tridos) + antivoisins(k, Tridos, thyroid_size)) / (2 * k);
		    	TSHs.sort(); newObj.TSH = (newObj.TSH - voisins(k, TSHs) + antivoisins(k, TSHs, thyroid_size)) / (2 * k);
		    	TSs.sort(); newObj.TS = (newObj.TS - voisins(k, TSs) + antivoisins(k, TSs, thyroid_size)) / (2 * k);
      }

      MongoClient.connect(url, (err, dbb) => {
        if (err) throw err;

        dbb.collection('thyroid_weight').insertOne(newObj, (err, res) => {
          if (err) throw err;
          console.log('1 document inserted');
        });
        dbb.close();
      });
      db.close();
    });
  });
}

function voisins(k, ages) {
  let sum = 0;
  let l = 0;
  do {
    l++;
    sum += ages[l];
  } while (l < k);
  return sum;
}

function antivoisins(k, ages, size) {
  let sum = 0;
  let l = thyroid_size - k - 1;

  do {
    sum += ages[l];
    l++;
  } while (l < thyroid_size - 1);
  return sum;
}


/* MongoClient.connect(url, function (err,db){
	    if (err) throw err;

	    var myobj = [
	    { delegue: 1},
	    { delegue: 2},
	    { delegue: 3}
	  ];
	  db.collection("RHS_thyroid").insertMany(myobj, function(err, res) {
	    if (err) throw err;
	    console.log("Number of documents inserted: " + res.insertedCount);
	    db.close();

	});
}); */

/* function insertThyroData(){
    var newDate = new Date();
    console.log("Hi i am in");
    //remplissage de la base du cancer
    var fs = require('fs');
    var csv = require("fast-csv");
    //var save = require("./controllers/");

    var inputFile='thyroid.txt';
    var content=fs.readFileSync(inputFile);
    csv
        .fromString(content, {headers: false})
        .on("data", function(line){
            console.log(line);
            var myobj = { problem:{T3: parseFloat(line[1]),Thyro: parseFloat(line[2]),
                Trido: parseFloat(line[3]),TSH: parseFloat(line[4]),
                TS: parseFloat(line[5])}, solution:parseInt(line[0]),
                validity:{  coherence:null, stochastique:null, regles:null, expert:null },
                nb_occurence:1, date_save: newDate,date_maj: newDate };
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                db.collection("case_thyroid").insertOne(myobj, function(err, res) {
                    if (err) throw err;
                    console.log("Number of documents inserted: " + res.insertedCount);
                    db.close();
                });
            });
        })
        .on("end", function(){

            console.log("done");
        });
    return true;
} */

/* MongoClient.connect(url, function (err,db){
	var count= db.collection('case_cancer').count({}, function(err, res) {
	    if (err) throw err;
    	//console.log("*******cancer size: "+res);
    	cancerPoids(res, 1);
	    db.close();
	});
}); */
// insertCancerData();

/* function cancerPoids(cancer_size,k){
	var k = 20;
	var i=0;
	var n= 800;
	var newObj=JSON.parse('{ "BI": 0, "age":0, "shape":0,"margin":0,"dencity":0 }');
	MongoClient.connect(url, function (err,db){
		var count= db.collection('case_cancer').find({},{validity:false,nb_occurence:false,date_maj:false}).toArray(function(err, allData) {
			if (err) throw err;

	    	//console.log(allData);

		    var obj=JSON.parse('{ "BI": 0, "age":0, "shape":0,"margin":0,"dencity":0 }');
		    console.log("cancer_size: "+cancer_size);
		    var loo;
			for(loo=0; loo <n; loo++){
			    var BIs = [];
			    var ages = [];
			    var shapes = [];
			    var margins = [];
			    var dencities = [];
			    i=0;
				do {
						//choisir aléatoirement une instance de case_cancer
					do{
						var randomObject =Math.floor(Math.random() * cancer_size-1);
					}
					while (randomObject < 0 || randomObject >= cancer_size);

					i++;
					//console.log("i= "+i+"andomObject: "+randomObject);
					var obj=allData[randomObject];
					//console.log(allData[i]);

			        var BI = (allData[i].problem.BI==null || obj.problem.BI == null) ? 0.5 : ( (allData[i].problem.BI==obj.problem.BI) ? 0:1 );
					var age=(allData[i].problem.age==null || obj.problem.age == null) ? 0.5 : ( Math.abs(allData[i].problem.age-obj.problem.age)/Math.max(allData[i].problem.age,obj.problem.age));
					var shape=(allData[i].problem.shape==null || obj.problem.shape == null) ? 0.5 : ( (allData[i].problem.shape==obj.problem.shape) ? 0:1 );
			        var margin=(allData[i].problem.margin==null || obj.problem.margin == null) ? 0.5 : ( (allData[i].problem.margin==obj.problem.margin) ? 0:1 );
			        var dencity=(allData[i].problem.dencity==null || obj.problem.dencity == null) ? 0.5 : ( (allData[i].problem.dencity==obj.problem.dencity) ? 0:1 );
			        //console.log(newObj);

			        BIs[i]=BI;
			        ages[i]=age;
			        shapes[i]=shape;
			        margins[i]= margin;
			        dencities[i]=dencity;

		    	}while (i<cancer_size-1);
		    	BIs.sort();newObj.BI = (newObj.BI - voisins(k,BIs) + antivoisins(k,BIs, cancer_size))/(2*k);
		    	ages.sort();newObj.age = (newObj.age - voisins(k,ages) + antivoisins(k,ages, cancer_size)) /(2*k);
		    	shapes.sort();newObj.shape = (newObj.shape - voisins(k,shapes) + antivoisins(k,shapes, cancer_size)) / (2*k);
		    	margins.sort();newObj.margin = (newObj.margin - voisins(k,margins) + antivoisins(k,margins, cancer_size)) / (2*k);
		    	dencities.sort();newObj.dencity = (newObj.dencity - voisins(k,dencities) + antivoisins(k,dencities, cancer_size))/ (2*k);

				console.log(newObj);
				MongoClient.connect(url, function(err, db) {
				if (err) throw err;

						db.collection("cancer_weight").insertOne(newObj, function(err, res) {
						if (err) throw err;
						console.log("1 document inserted");
						db.close();
					});
				});
			}
			db.close();
		});
	});
} */


/* function insertThyroidData(){
	var newDate = new Date();
	//remplissage de la base du cancer
	var fs = require('fs');
	var parse = require('csv-parse');
	var async = require('async');

	//var inputFile='thyroid.txt';
	var content=fs.readFileSync("thyroid.txt");

		console.log(content);

	var parsered = parse({delimiter: ','}, function (err, content) {
		console.log(content);
	  	async.eachSeries(data, function (line, callback) {
	  	console.log(line[0]+" "+line[1]+" "+line[2]+" "+line[3]+" "+line[4]+" "+line[5]);

	  	var myobj = { problem:{BI: parseInt(line[0]),age: parseInt(line[1]),
	  						   shape: parseInt(line[2]),margin: parseInt(line[3]),
	  						   dencity: parseInt(line[4])}, solution:parseInt(line[5]),
		validity:{  coherence:null, stochastique:null, regles:null, expert:null },
		nb_occurence:1, date_maj: newDate };
			/*MongoClient.connect(url, function(err, db) {
			if (err) throw err;
				db.collection("case_cancer").insertOne(myobj, function(err, res) {
					if (err) throw err;
						console.log("Number of documents inserted: " + res.insertedCount);
						db.close();
				});
			});

	  	callback();
	  })
	});
	fs.createReadStream(inputFile).pipe(parsered);

	return true;
}
*/

/* function insertCancerData(){
	var newDate = new Date();
	//remplissage de la base du cancer
	var inputFile='thyroid.txt';
	var parser = parse({delimiter: ','}, function (err, data) {
		console.log(data);
	  	async.eachSeries(data, function (line, callback) {
	  	console.log(line[0]+" "+line[1]+" "+line[2]+" "+line[3]+" "+line[4]+" "+line[5]);

	  	var myobj = { problem:{BI: parseInt(line[0]),age: parseInt(line[1]),
	  						   shape: parseInt(line[2]),margin: parseInt(line[3]),
	  						   dencity: parseInt(line[4])}, solution:parseInt(line[5]),
		validity:{  coherence:null, stochastique:null, regles:null, expert:null },
		nb_occurence:1, date_maj: newDate };
			MongoClient.connect(url, function(err, db) {
			if (err) throw err;
				db.collection("case_cancer").insertOne(myobj, function(err, res) {
					if (err) throw err;
						console.log("Number of documents inserted: " + res.insertedCount);
						db.close();
				});
			});

	  	callback();
	  });
	});
	fs.createReadStream(inputFile).pipe(parser);

	return true;
} */

/* function thyroidPoids(thyroid_size,k){
	var k = 20;
	var i=0;
	var n= 800;
	var newObj=JSON.parse('{ "T3": 0, "Thyro":0, "Trido":0,"TSH":0,"TS":0 }');
	MongoClient.connect(url, function (err,db){
		var count= db.collection('case_thyroid').find({},{validity:false,nb_occurence:false,date_maj:false}).toArray(function(err, allData) {
			if (err) throw err;

	    	//console.log(allData);

		    var obj=JSON.parse('{ "T3": 0, "Thyro":0, "Trido":0,"TSH":0,"TS":0 }');
		    console.log("thyroid_size: "+thyroid_size);
		    var loo;
			for(loo=0; loo <n; loo++){
			    var T3s = [];
			    var Thyros = [];
			    var Tridos = [];
			    var TSHs = [];
			    var TSs = [];
			    i=0;
				do {
						//choisir aléatoirement une instance de case_cancer
					do{
						var randomObject =Math.floor(Math.random() * cancer_thyroid-1);
					}
					while (randomObject < 0 || randomObject >= thyroid_size);

					i++;
					//console.log("i= "+i+"andomObject: "+randomObject);
					var obj=allData[randomObject];
					//console.log(allData[i]);

			        var T3 = (allData[i].problem.T3==null || obj.problem.T3 == null) ? 0.5 : ( Math.abs(allData[i].problem.T3-obj.problem.T3)/Math.max(allData[i].problem.T3,obj.problem.T3));
					var Thyro=(allData[i].problem.Thyro==null || obj.problem.Thyro == null) ? 0.5 : ( Math.abs(allData[i].problem.Thyro-obj.problem.Thyro)/Math.max(allData[i].problem.Thyro,obj.problem.Thyro));
					var Trido=(allData[i].problem.Trido==null || obj.problem.Trido == null) ? 0.5 :( Math.abs(allData[i].problem.Trido-obj.problem.Trido)/Math.max(allData[i].problem.Trido,obj.problem.Trido));
			        var TSH=(allData[i].problem.TSH==null || obj.problem.TSH == null) ? 0.5 : ( Math.abs(allData[i].problem.TSH-obj.problem.TSH)/Math.max(allData[i].problem.TSH,obj.problem.TSH));
			        var TS=(allData[i].problem.TS==null || obj.problem.TS == null) ? 0.5 : ( Math.abs(allData[i].problem.TS-obj.problem.TS)/Math.max(allData[i].problem.TS,obj.problem.TS));
			        //console.log(newObj);

			        T3s[i]=T3;
			        Thyros[i]=Thyro;
			        Tridos[i]=Trido;
			        TSHs[i]= TSH;
			        TSs[i]=TS;

		    	}while (i<thyroid_size-1);
		    	T3s.sort();newObj.T3 = (newObj.T3 - voisins(k,T3s) + antivoisins(k,T3s, thyroid_size))/(2*k);
		    	Thyros.sort();newObj.Thyro = (newObj.Thyro - voisins(k,Thyros) + antivoisins(k,Thyros, thyroid_size)) /(2*k);
		    	Tridos.sort();newObj.Trido = (newObj.Trido - voisins(k,Tridos) + antivoisins(k,Tridos, thyroid_size)) / (2*k);
		    	TSHs.sort();newObj.TSH = (newObj.TSH - voisins(k,TSHs) + antivoisins(k,TSHs, thyroid_size)) / (2*k);
		    	TS.sort();newObj.TS = (newObj.TS - voisins(k,TSs) + antivoisins(k,TSs, thyroid_size))/ (2*k);

				console.log(newObj);
				MongoClient.connect(url, function(err, db) {
				if (err) throw err;

						db.collection("thyroid_weight").insertOne(newObj, function(err, res) {
						if (err) throw err;
						console.log("1 document inserted");
						db.close();
					});
				});
			}
			db.close();
		});
	});
} */
