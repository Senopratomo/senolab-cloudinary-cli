const dotenv = require('dotenv');
dotenv.load();

const fs = require('fs');
const cloudinary = require('cloudinary').v2;

// set your env variable containing cloud name, api key, and secret
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET
});

if (process.argv.length > 2) {
    let action = process.argv[2];
    switch(action.toLowerCase()) {
        case "upload":
            let path = process.argv[3];
            let tags = "";
            if (process.argv[4]) {
                tags = process.argv[4];
            } else {
                tags = "my_pic";
            }
            uploadFile(path,tags);
            break;
        case "listall":
            listAllImages();
            break;
        default:
            printInstructions();
            break;
    }
} else {
    printInstructions();
}

function uploadFile(path, tag) {
    console.log( "** ** ** ** ** ** ** ** ** Uploads ** ** ** ** ** ** ** ** ** **");

    // File upload
    cloudinary.uploader.upload(path,{tags: tag},function(err,image){
        console.log();
        console.log("** File Upload");
        if (err){ console.warn(err);}
        console.log("* public_id for the uploaded image is generated by Cloudinary's service.");
        console.log("* "+image.public_id);
        console.log("* "+image.url);
    });
}

function listAllImages() {
    console.log("** My uploaded images (max 30 results): **");
    cloudinary.search
        .expression('resource_type:image')
        .sort_by('public_id','desc')
        .max_results(30)
        .execute().then(result=>console.log(result));
}

function printInstructions() {
    console.log("Usage of this CLI as follows: ");
    console.log("$node cloudinary <full_path_to_file> <image_tag>");
    console.log("eg node cloudinary /home/user/pic.jpg my_cool_pic");
}