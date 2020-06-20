const { Client } = require("pg");

const client = new Client("postgres://localhost:5432/linkenator-db");

async function getAllLinks() {
  const { rows } = await client.query(
    `SELECT id, link, date, comment, clicks 
    FROM link;
  `
  );

  return rows;
}

async function getAllTags() {
  try {
    const { rows: tags } = await client.query(`
      SELECT *
      FROM tags;
    `);

    return tags;
  } catch (error) {
    throw error;
  }
}

async function getLinkByTagName(tagName) {
  try {
    const { rows: linkId } = await client.query(
      `
      SELECT link.id
      FROM link
      JOIN post_tags ON posts.id=post_tags."postId"
      JOIN tags ON tags.id=post_tags."tagId"
      WHERE tags.name=$1;
    `,
      [tagName]
    );

    return await Promise.all(linkId.map((link) => getLinkById(link.id)));
  } catch (error) {
    throw error;
  }
}

async function getLinkById(linkId) {
  try {
    const {
      rows: [link],
    } = await client.query(
      `
      SELECT *
      FROM link
      WHERE id=$1;
    `,
      [linkId]
    );

    if (!link) {
      throw {
        name: "LinkNotFound",
        message: "Could not find a link with that ID",
      };
    }

    const {
      rows: [linkId],
    } = await client.query(
      `
      SELECT tags.*
      FROM tags
      JOIN link_tags ON tags.id=post_tags."tagId"
      WHERE link_tags."linkId"=$1;
    `,
      [linkId]
    );
    // What do I do with this?
    // const {
    //   rows: [author],
    // } = await client.query(
    //   `
    //   SELECT id, username, name, location
    //   FROM users
    //   WHERE id=$1;
    // `,
    //   [post.authorId]
    // );

    // post.tags = tags;
    // post.author = author;

    // delete post.authorId;

    return linkId;
  } catch (error) {
    throw error;
  }
}

async function createTags(name) {
  try {
    const {
      rows: [result],
    } = await client.query(
      `
    INSERT INTO tags(name)
    VALUES ($1)
    ON CONFLICT (name) DO NOTHING
    RETURNING *
    `,
      [name]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function createTagLink(linkId, tagId) {
  try {
    const {
      rows: [result],
    } = await client.query(
      `
            INSERT INTO taglinks("linkId", "tagId")
            VALUES ($1, $2)
            RETURNING *;
            `,
      [linkId, tagId]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function createLink({ link, date, comment, clicks, tags }) {
  console.log("139");
  try {
    const tagResults = await Promise.all(tags.map((tag) => createTags(tag)));
    const {
      rows: [result],
    } = await client.query(
      `
      INSERT INTO link(link, date, comment, clicks)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `,
      [link, date, comment, clicks]
    );
    await Promise.all(tagResults.map(({ id }) => createTagLink(result.id, id)));
    result.tags = tagResults;
    console.log("153", result);
    return result;
  } catch (error) {
    throw error;
  }
}

async function updateLink(id, fields = {}) {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  if (setString.length === 0) {
    return;
  }

  try {
    const {
      rows: [result],
    } = await client.query(
      `
      UPDATE link
      SET ${setString}
      WHERE id=${id}
      RETURNING *;
    `,
      Object.values(fields)
    );

    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  getAllLinks,
  createLink,
  updateLink,
  getLinkByTagName,
  getAllTags,
  getLinkById,
};
