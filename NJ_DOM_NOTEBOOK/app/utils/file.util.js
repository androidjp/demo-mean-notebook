var fs = require('fs');
var envConfig = require('../../config/env/config_development');
module.exports = {
    rename : rename,
    uploadSetting: uploadSetting
}

function rename(from,to) {

    fs.rename(from, to, function (err) {
        if (err) {
            throw err;
        }
        console.log('done!');
    })
}

function uploadSetting(form) {

    form.encoding = 'utf-8';
    form.uploadDir = envConfig.upload.localHeadPic;
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;
}