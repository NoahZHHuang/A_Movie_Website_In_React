const fs = require("fs");
const path = require('path');

fromJsonFile = (fileName) => {
  return (req, res) => {
    const thePath = path.resolve(__dirname, './' + fileName + '.json');
    console.log('getting data from file :' + thePath);
    const data = fs.readFileSync(thePath).toString();
    console.log('data content is \n' + data);
    const json = JSON.parse(data);
    return res.json(json);
  }
}

module.exports = {
  'GET /app/categories': fromJsonFile('categories_data'),
  'GET /app/movies': fromJsonFile('movies_data')
};