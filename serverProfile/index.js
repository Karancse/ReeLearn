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




app.post("/createProfile", async (req, res) => {
    const { email , role , degree , course , semester , university } = req.body;

    console.log("Create Profile Request: "+email+" "+role+" "+degree+" "+course+" "+semester+" "+university)
	
	var profile1 = await Profile.findOne({ email })

    if(profile1){
        console.log("Invalid")
        res.send({
            status: 'Invalid'
        })
        return
    }
    
    var profile = new Profile({
        email,
        role,
        degree,
        course,
        semester,
        university
    })

    await profile.save();

    console.log("updated");
    return(
        res.send({
            status: 'Valid',
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

app.post("/getProfile", async (req, res) => {
    const { email } = req.body;

    console.log("Get Profile Request: "+email)
	
	var profile1 = await Profile.findOne({ email })

    if(profile1){
        return (
            res.send({
                status: "Profile Found",
                role: profile1.role,
                course: profile1.course,
                branch: profile1.branch,
                semester: profile1.semester,
                university: profile1.university
            })
        )
    }
    
    return(
        res.send({
            status: 'Profile Not Found',
        })
    )
})

app.listen(3002,() => {
    console.log('\nListening to localhost:3002');
})



