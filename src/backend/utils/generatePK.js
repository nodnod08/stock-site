const { generateKeyPair } = require("crypto");
const fs = require("fs");

generateKeyPair(
  "rsa",
  {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  },
  (err, publicKey, privateKey) => {
    fs.writeFileSync(__dirname + "/keys/pub_key.pem", publicKey);
    fs.writeFileSync(__dirname + "/keys/pri_key.pem", privateKey);
  }
);
