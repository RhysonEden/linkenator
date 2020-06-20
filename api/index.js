const express = require("express");
const apiRouter = express.Router();

const linkRouter = require("./links");
apiRouter.use("/links", linkRouter);

const tagsRouter = require("./tags");
apiRouter.use("/tags", tagsRouter);

apiRouter.use((error, req, res, next) => {
  res.send(error);
});

module.exports = apiRouter;
