//const mongoose = require ('mongoose');

const mongoose = require('mongoose');

const { Router } = require ('express');
const router = Router();

const express = require('express')
const app = express()

app.use(express.static("public"));
app.use(express.json());

var fs = require('fs');

const cors = require('cors');
app.use(cors())

//import { Schema } from 'mongoose';

const Schema = mongoose.Schema;

const model = mongoose.model;

const CredentialSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	}
});


const password = 'asdfpoiu1234';
var uri = "mongodb+srv://Karan:"+password+"@reelearn.lrvqf.mongodb.net/userDetails?retryWrites=true&w=majority"
//var uri = "mongodb://Karan:"+password+"@clustermasjeed1-shard-00-00-ekpfe.mongodb.net:27017,clustermasjeed1-shard-00-01-ekpfe.mongodb.net:27017,clustermasjeed1-shard-00-02-ekpfe.mongodb.net:27017/test?ssl=true&replicaSet=ClusterMasjeed1-shard-0&authSource=admin&retryWrites=true"


const connectDB = async () => {
	try {
        console.log(9);
		mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		}).then(res => {
            console.log(16);  
			console.log(res);
        })
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

connectDB();

var Credential = model('user', CredentialSchema);

	
	app.post("/signUp", (req, res) => {
		const { name, password, email } = req.body;
	
		credential = Credential.findOne({ email })
		.then(res => {
			if (credential) {
				return res
					.status(ErrorCode.HTTP_BAD_REQ)
					.json(errorWrapper('User Already Exists'));
			}

			var credential = new Credential({
				username,
				password,
				email
			});
	
			credential.save()
		})

		
			
	})
	
	
app.listen(3001,() => {
		console.log('\nListening to localhost:3001');
});
