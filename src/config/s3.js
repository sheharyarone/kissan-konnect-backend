const { S3 } = require('@aws-sdk/client-s3');

// Configure AWS S3
const s3 = new S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECREet_ACCESS_KEY,
  },
});

module.exports = { s3 };
