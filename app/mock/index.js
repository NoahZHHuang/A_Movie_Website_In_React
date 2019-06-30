//index.js
const delay = require("mocker-api/utils/delay");

const mockApi = require("./mock-api.js");

module.exports = delay(mockApi, 300);