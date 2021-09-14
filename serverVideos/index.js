const mongoose = require('mongoose');

const express = require('express')
const app = express()

app.use(express.static("public"));
app.use(express.json());

const cors = require('cors');
app.use(cors())

const Schema = mongoose.Schema,
	  ObjectId = Schema.ObjectId;

const model = mongoose.model;

const VideoSchema = Schema({
	videoUploadName: {
		type: String,
		required: true,
	},
	videoName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	profileID: {
		type: ObjectId,
		required: true,
	},
    branch: {
		type: String,
		required: true,
	},
    subject: {
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
    tags: {
		type: Array,
		required: true,
	},
    description: {
		type: String,
		required: true,
	},
    views: {
		type: Number,
		required: true,
	},
    likes: {
		type: Number,
		required: true,
	}
});

const password = 'asdfpoiu1234';
var uri = "mongodb+srv://Karan:"+password+"@reelearn.lrvqf.mongodb.net/videosDetails?retryWrites=true&w=majority"
//var uri = "mongodb://Karan:"+password+"@clustermasjeed1-shard-00-00-ekpfe.mongodb.net:27017,clustermasjeed1-shard-00-01-ekpfe.mongodb.net:27017,clustermasjeed1-shard-00-02-ekpfe.mongodb.net:27017/test?ssl=true&replicaSet=ClusterMasjeed1-shard-0&authSource=admin&retryWrites=true"


const connectDB = async () => {
	try {
        console.log(9);
		mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			//useFindAndModify: false,
			//useCreateIndex: true,
		}).then(res => {
            console.log(16);  
        })
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

connectDB();

var Video = model('videos', VideoSchema);

app.post("/uploadVideo", async (req, res) => {
    const videoToUpload = req.body;

	videoToUpload['views']=0
	videoToUpload['likes']=0

    console.log("Upload Video Request: ",videoToUpload)
	
    const videoUploadName = videoToUpload.videoUploadName

	var video = await Video.findOne({ videoUploadName })

    if(video){
        console.log("Video Already Exists")
        res.send({
            status: 'Video Already Exists'
        })
        return
    }
	console.log('Video Entry Created')
	return (
		res.send({
			status: 'Video Entry Created'
		})
	)
    video = videoToUpload

    await video.save();

    console.log("Uploaded");
    return(
        res.send({
            status: 'Uploaded',
        })
    )
})


app.listen(3003,() => {
    console.log('\nListening to localhost:3003');
})
