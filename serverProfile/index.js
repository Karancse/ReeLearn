const mongoose = require('mongoose');

const { Router } = require ('express');
const router = Router();
const path = require('path');

const express = require('express')
const app = express()

app.use(express.static("public"));
app.use(express.json());

var fs = require('fs');

const cors = require('cors');
const { profile } = require('console');
app.use(cors())

const multer = require('multer');

const uuidv4 = require('uuidv4');

const DIR = './public/uploads/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4 + '-' + fileName)
    }
});

var upload = multer({ storage: storage });

//var upload = multer()

const Schema = mongoose.Schema;

const model = mongoose.model;

const ProfileSchema = Schema({
	email: {
		type: String,
		required: true,
	},
    role: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    university: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

const password = 'asdfpoiu1234';
var uri = "mongodb+srv://Karan:"+password+"@reelearn.lrvqf.mongodb.net/userDetails?retryWrites=true&w=majority"


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
			/*console.log(res);*/
        })
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
}

connectDB();

var Profile = model('profile', ProfileSchema);

app.post("/createProfile", upload.single('image'), async (req, res) => {
    const { email , role , degree , course , semester , university , preview } = req.body;
    const url = req.protocol + '://' + req.get('host');
	console.log("Create Profile Request: "+email+" "+role+" "+degree+" "+course+" "+semester+" "+university)
	
	profile = await Profile.findOne({ email })

    if(profile){
        console.log("Invalid")
        res.send({
            status: 'Invalid'
        })
        return
    }
    
    console.log("Directory Path:")

    console.log(req.body.image);

    var profile = new Profile({
        email,
        role,
        degree,
        course,
        semester,
        university,
        image: url + '/public/uploads/' +req.body.image.filename
    })

    await profile.save();

    console.log("updated");
    return(
        res.send({
            status: 'Updated',
            image: image
        })
    )
})

app.post("/updateProfile", async (req, res) => {
    const { email , degree , course , semester , university } = req.body;

	console.log("Create Profile Request: "+email+" "+degree+" "+course+" "+semester+" "+university)
	
	profile = await Profile.findOne({ email })

    if(!profile){
        console.log("Invalid")
        res.send({
            status: 'Invalid'
        })
    }

    await profile.updateOne(
        {
            email: email
        },
        {
            $set: { 
                degree: degree,
                course: course,
                semester: semester,
                university: university
            }
        }
    );

    console.log("updated");
    return(
        res.send({
            status: 'Updated'
        })
    )
})

app.listen(3002,() => {
    console.log('\nListening to localhost:3002');
})



