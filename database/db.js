

const mongoose = require ("mongoose");


mongoose.connect("mongodb+srv://developer:hauntingsuccess@cluster1.bmo8mew.mongodb.net/?retryWrites=true", {
    "dbName": "StudentData"
}).then( () => {
    console.log("Connected database");
})
.catch( (err) =>{
    console.log('Failed!');
})
