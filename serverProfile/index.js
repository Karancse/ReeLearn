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

const aws = require('aws-sdk')
const multers3 = require("multer-s3")

const S3_ACCESS_KEY = "AKIAVUI26QSLW4PA3PT6"
const S3_SECRET_ACCESS_KEY = "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"
const S3_BUCKET_REGION = "ap-south-1"

const s3 = new aws.s3({
    accessKeyId : S3_ACCESS_KEY,
    secretAccessKey : S3_SECRET_ACCESS_KEY,
    region : S3_BUCKET_REGION
})



const s3Storage = multerS3({
    s3: s3,
    bucket: bucketName,
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb){
        cb(null, "image.JPG")
    }
})

const uploadS3 = (bucketName) => multer({ storage: s3Storage })

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
    }
//    ,
//    image: {
//        data: Buffer,
//        contentType: String
//    }
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
    
    const uploadImage = uploadS3("reelearnimages").single(
        "image-upload"
    );

    uploadImage((req, res, err) => {
        if(err) 
            return res.status(400).json({ success: false, message: err.message })
    })

    console.log(req.files);

    return (
        res.send({
            status: "Valid"
        })
    )

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



