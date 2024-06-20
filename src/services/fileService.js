const path = require("path");

const uploadSingleFile = async (fileObject) => {


    // let uploadPath = __dirname + fileObject.name;

    let uploadPath = path.resolve(__dirname, "../public/images/upload");


    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: 'link-image',
            error: null
        }

    } catch (err) {
        console.log('>>> check err', err);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }

    }


}

module.exports = {
    uploadSingleFile
}