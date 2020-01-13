const fs = require('fs');
const Test = require('../models/test/')
const res = {}

// upload file using test model
res.uploadController = (uid, path) => new Promise((resolve,reject) =>{
    Test.selectTest({where: { id: uid }}).then(
        (res) => {
            if(res.length === 0) {
            Test.createTest({id:uid,name:path}).then(
                (res)=> resolve(res)).catch((err) => reject(err));
        } else {
            fs.unlink(res[0].dataValues.name, function(error) {
                        if (error) {
                            throw error;
                        }
                        console.log('Deleted!!');
                    });
                    Test.updateTest({ name: path }, { where: { id: uid } }, { multi: true }).then(
                        (res)=> resolve(res)).catch((err) => reject(err));
        } }
    );
})

res.fetchController = (uid) => new Promise((resolve, reject) => {
    Test.selectTest({where: { id: uid }}).then((res) => {
        if(res.length !== 0) { 
            var img = fs.readFileSync(res[0].dataValues.name);
            resolve({status: true,img})
        }
        resolve({ status: false})
    }).catch((err) => reject(err));
})
  
module.exports = res;