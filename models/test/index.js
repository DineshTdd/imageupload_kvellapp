// eslint-disable-next-line no-unused-vars
const Test = require("./testModel");

exports.createTest = (details) => Test.create(details);
exports.selectTest = (details) => Test.findAll(details);
exports.updateTest = (details, options) => Test.update(details, options);