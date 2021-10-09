const mongoose = require('mongoose');

const express = require('express')
const app = express()

const session = require('express-session')

app.use(express.static("public"));
app.use(express.json());

var fs = require('fs');

const cors = require('cors');
app.use(cors())

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

app.use(session({
	secret: 'secret',
	reSave: false,
	saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

const Schema = mongoose.Schema;

const model = mongoose.model;

const CredentialSchema = Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
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
        })
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

connectDB();

var Credential = model('credential', CredentialSchema);

	
	app.post("/signUp", async (req, res) => {
		const { username, password, email } = req.body;

		console.log("SignUp Request: "+username+" "+password+" "+email)
	
		credential = await Credential.findOne({ email })
		
		if (credential) {
				console.log("An User with the EmailID Already Exists")
				res.send({
					status: 'An User with the EmailID Already Exists'
				})
				return
		}

		var credential = new Credential({
				username,
				password,
				email
		});
	
		await credential.save()
		
		console.log('saved');
		return(
			res.send({
				status: 'Valid'
			})
		)
	})
	
	app.post("/logIn1", async (req, res) => {
		const { username, password } = req.body;

		console.log("LogIn Request: "+username+" "+password)

		credential = await Credential.findOne({ username , password })

		console.log(credential)

		if (!credential) {
				console.log("Invalid")
				res.send({
					status: 'Invalid'
				})
		}

		if(credential)
		{
			console.log("Valid")
			res.send({
				status: 'Valid' ,
				username: username
			})
		}
	})

	function initializePassport(passport) {
		const authenticateUser = async (email , password, done) => {
			credential = await Credential.findOne({ email })
	
			if(!credential) {
				return done(null, false)
			}
	
			if ( credential.password!=password ){
				return done(null, false)
			}
	
			done(null, credential)
	
		}
	
		passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
		passport.serializeUser((user, done) => {  done(null, user.id) })
		passport.deserializeUser((id, done) => {  done(null, Credential.findById(id)) })
	}
	
	initializePassport(passport)
	
	app.post("/logIn", function(req,res,next) {
		passport.authenticate('local', function(err , credential , info) {
			if ( !credential ) return res.redirect('/inValid');
			res.send({
				status: 'Valid',
				username: credential.username,
				email: credential.email
			})
		}) (req, res, next);
	})

	app.get('/valid', (req, res) => {
		console.log(req)
		res.send({
			status: 'Valid',
			username: req.username,
			email: req.email
		})
	})

	app.get('/inValid',(req, res) => {
		res.send({
			status: 'Invalid'
		})
	})


	app.listen(3001,() => {
		console.log('\nListening to localhost:3001');
	});

