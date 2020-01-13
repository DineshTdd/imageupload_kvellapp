const imageFilter = function(req, file, cb) {
    // Accept jpg/jpeg/png images only
    try{
        req.fileValidationError = null;
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
        req.fileValidationError = 'Only (jpg/jpeg) and png files are allowed!';
        return cb(new Error('Only (jpg/jpeg) and png files are allowed!'), false);
    }
    cb(null, true);
    } catch(err) {
        console.log(err)
    }
};
exports.imageFilter = imageFilter;