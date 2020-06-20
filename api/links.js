const express = require("express");
const linkRouter = express.Router();
const {
  getAllLinks,
  createLink,
  updateLink,
  getLinkByTagName,
  getAllTags,
  getLinkById,
} = require("../db");

linkRouter.post("/", async (req, res, next) => {
  const { link, data, comment, clicks = "" } = req.body;

  const tagArr = tags.trim().split(/\s+/);
  const linkData = {};

  if (tagArr.length) {
    linkData.tags = tagArr;
  }

  try {
    linkData.link = req.user.id;
    linkData.date = date;
    linkData.comment = comment;
    linkData.clicks = clicks;
    linkData.tags = tags;

    const link = await createLink(linkData);
    if (link) {
      res.send({ link });
    } else {
      ({
        name: "Missing Post Data",
        message: "Post Data is missing",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

linkRouter.patch("/:linkId", async (req, res, next) => {
  const { linkId } = req.params;
  const { link, date, comment, clicks, tags = "" } = req.body;

  const updateFields = {};

  if (tags && tags.length > 0) {
    updateFields.tags = tags.trim().split(/\s+/);
  }

  if (link) {
    updateFields.link = link;
  }

  if (date) {
    updateFields.date = date;
  }

  if (comment) {
    updateFields.comment = comment;
  }

  if (clicks) {
    updateFields.clicks = clicks;
  }

  try {
    const updatedLink = await updateLink(linkId, updateFields);
    res.send({ post: updatedLink });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

linkRouter.use((req, res, next) => {
  console.log("A request is being made to /links");

  next();
});

//Delete wasn't shown as needed for this project
// linkRouter.delete("/:postId", async (req, res, next) => {
//   try {
//     const link = await getLinkById(req.params.linkId);

//     if (post && post.author.id === req.user.id) {
//       const updatedPost = await updatePost(post.id, { active: false });

//       res.send({ post: updatedPost });
//     } else {
//       next(
//         post
//           ? {
//               name: "UnauthorizedUserError",
//               message: "You cannot delete a post which is not yours",
//             }
//           : {
//               name: "PostNotFoundError",
//               message: "That post does not exist",
//             }
//       );
//     }
//   } catch ({ name, message }) {
//     next({ name, message });
//   }
// });

linkRouter.get("/", async (req, res, next) => {
  try {
    const allLinks = await getAllLinks();

    res.send({
      allLinks,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = linkRouter;
