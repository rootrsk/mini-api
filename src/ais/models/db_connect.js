const mongoose = require('mongoose')

mongoose.connect(process.env.AIS_MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('connected ais to database')).catch((e) => console.log('Unable to connect to database.', e))


module.exports = exports = mongoose