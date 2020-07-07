const fs = require("fs");

const readFile = fileName => {
  try {
    return JSON.parse(fs.readFileSync(fileName));
  } catch (e) {
    return [];
  }
};

const writeFile = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(content));
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
    readFile, writeFile }


