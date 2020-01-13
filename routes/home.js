const homeRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const homeController = require("../controllers").home;

homeRouter.get("/", (request, response) => {
  response.send('hii')
});

homeRouter.post("/", (request, response) => {
  // post method
});

homeRouter.put("/", (request, response) => {
  // put method
});

homeRouter.delete("/", (request, response) => {
  // delete method
});

module.exports = homeRouter;