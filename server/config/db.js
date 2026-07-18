let mongoose = require('mongoose')
const dbPath = 'mongodb+srv://karansingh33477:22May2004@cluster0.1xposgq.mongodb.net/bicycleDb'

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Err", err)
})
