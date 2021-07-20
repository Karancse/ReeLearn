const mongoose = require ('mongoose');


const password = 'asdfpoiu1234';
var uri = "mongodb+srv://Karan:"+password+"@reelearn.lrvqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
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

