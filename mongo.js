const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://zaincui123:zaincui123@cluster0.llzx1hu.mongodb.net/investorsportal?retryWrites=true&w=majority")
    .then(() => {
        console.log("mongodb connected");

        const collection = mongoose.model("collection", newSchema);

        collection.find()
            .then(result => {
                console.log(result[0].email);
            })
            .catch(err => {
                console.log(err);
            });
    })
    .catch(err => {
        console.log(err);
    });

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
