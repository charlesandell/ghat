const fs = require("fs-extra");

fs.emptyDirSync("./build");

fs.copySync("./src", "./build");

var manifest = {
  "version": process.env.npm_package_version
};
fs.writeFileSync("./build/bundle.json", JSON.stringify(manifest, null, 2));