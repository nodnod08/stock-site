import { generateKeyPair } from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    const publicDir = __dirname + "/keys/pub_key.pem";
    const privateDir = __dirname + "/keys/pri_key.pem";

    if (!fs.existsSync(__dirname + "/keys"))
      fs.mkdirSync(__dirname + "/keys", { recursive: true });

    fs.writeFileSync(publicDir, publicKey);
    fs.writeFileSync(privateDir, privateKey);
  }
);
