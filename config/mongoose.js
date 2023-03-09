const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		// ? test connection is connected or not
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connection Established\n`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
