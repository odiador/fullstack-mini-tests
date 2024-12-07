const { connect } = require('mongoose');

const connectDB = async () => {
    try {
        await connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected...');
    } catch (e) {
        console.error(e);
        throw new Error('Base de datos no conectada');
    }
}
module.exports = connectDB;
