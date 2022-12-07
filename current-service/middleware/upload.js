// DEPRECATED. KEPT FOR DEMONSTRATION PURPOSES.

const stream = require("stream");
const { Storage } = require("@google-cloud/storage");

const getPassThroughStream = (stream) => {
    return new stream.PassThrough();
}

const writeToPassThroughStream = (passThroughStream, file) => {
    const buffer = file.data;
    passThroughStream.write(buffer);
    passThroughStream.end();

    return passThroughStream;
}

const createStorage = () => {
    return new Storage();
};

const createBucket = (storage, bucketName) => {
    return storage.bucket(bucketName);
}

const createBucketFile = (bucket, fileName) => {
    return bucket.file(fileName);
};

streamFileUpload = async (file, bucketName) => {
    let passThroughStream = writeToPassThroughStream(getPassThroughStream(stream), file);
    let storage = createStorage();
    const bucket = createBucket(storage, bucketName);
    const bucketFile = createBucketFile(bucket, file.name);

    passThroughStream.pipe(bucketFile.createWriteStream()).on('finish', () => {
        console.log(`${file.name} uploaded to ${bucketName}`);
        bucketFile.makePublic().catch(console.error);
    });
};

module.exports = {
    streamFileUpload
}