const mongoose = require('mongoose');

const connectString = "the stringfrom mongobd";

const connenctDB = (url) =>{
    return mongoose.connect(connectString, {
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true,
    })
}

// .then(()=> console.log("connected to database"))
// .catch((err)=> console.log(er))


module.exports = connenctDB