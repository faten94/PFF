const mongoose = require('mongoose');
const mongoURI= "mongodb+srv://needelp:epitech2020@needelp-yr1nq.mongodb.net/test?retryWrites=true&w=majority";



const connectToDatabase = async() =>
{
    try
    {
       await mongoose.connect
        (
            mongoURI,
            {
                useCreateIndex:true,
                useFindAndModify:true,
                useUnifiedTopology:true,
                useNewUrlParser:true
            }
        )

        console.log('Mongodb est connecté baby ! 💪');
    } 
    catch(error)
    {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectToDatabase;