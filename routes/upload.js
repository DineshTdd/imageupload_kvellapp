const uploadRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const uploadController = require("../controllers/upload")
const filter = require('../helpers/imagefilter');

const path = require('path');

const multer = require('multer');
var fileName;
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/')
    },
    filename: (req, file, cb) => {
      var parts = file.originalname.split(".");
      fileName = parts[0]+Date.now()+'.'+parts[1];
      cb(null, fileName)
    }
});
const upload = multer({
  storage: storage,
  fileFilter: filter.imageFilter,
  limits:{
    fileSize: 1024 * 768
}
});

uploadRouter.get("/:id", (request, response) => {
  uploadController.fetchController(request.params.id).then((res) =>  {
  if (res.status) { 
    console.log(res.img)
    response.writeHead(200, {'Content-Type': 'image/jpg' });
    response.end(res.img, 'binary'); 
  } else {
    res.json({ msg: 'Id does not exists'}) 
  }
  }
  ).catch((err) =>   response.json({ err: err }))
});

uploadRouter.post("/", upload.single('file'), (request, response) => {
  var uploadStatus;
    if (request.file) {
      console.log('Uploading file...');
      uploadStatus = 'File Uploaded Successfully';
  } else {
      console.log('No File Uploaded');
      uploadStatus = 'File Upload Failed';
  }
  
 uploadController.uploadController(request.body.uid,path.join(__dirname, '../public/')+fileName).then((res) =>  response.json({ status: 200, filename: `Name Of File: ${fileName} ${uploadStatus}` })).catch((err) =>   response.json({ status: 500, filename: `ERROR ${uploadStatus}` })
 )


});


uploadRouter.put("/", (request, response) => {
  // put method
});

uploadRouter.delete("/", (request, response) => {
  // delete method
});

module.exports = uploadRouter;