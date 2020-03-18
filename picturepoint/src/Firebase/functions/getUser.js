const { db } = require('./firebase');

exports.getUser = (email, callback) => {
    db.collection('users').where("email", '==', email)
    .get()
    .then(function(querySnapshot) {
        callback(querySnapshot.docs[0].data());
    })
    .catch(function(error) {
        console.log("Error: ", error);
    });
};