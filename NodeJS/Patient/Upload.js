//mongoose
const mongoose =  require('mongoose');

//model schema
var UploadSchema = new mongoose.Schema({
    imageURL: String,

})

var uploadModel = mongoose.model('uploadimage', UploadSchema);
module.exports= uploadModel;