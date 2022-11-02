const routes = require("express").Router();
const controller = require("../controller/controller");

routes.route("/api/categories").get(controller.getCategories);
routes.route("/api/categories").post(controller.createCategories);
routes.route("/api/transaction").get(controller.getTransaction);
routes.route("/api/transaction").post(controller.createTransaction);
routes.route("/api/transaction").delete(controller.deleteTransaction);
routes.route("/api/labels").get(controller.getLabels);

module.exports = routes;
