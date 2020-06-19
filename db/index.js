const { Client } = require("pg"); // imports the pg module

// supply the db name and location of the database
const client = new Client("postgres://localhost:5432/linkenator-db");

async function getAllLinks() {
  const { rows } = await client.query(
    `SELECT id, link, date, comment, clicks, tags 
    FROM link;
  `
  );

  return rows;
}

async function createLink({ link, date, comment, clicks, tags }) {
  try {
    const result = await client.query(
      `
      INSERT INTO link(link, date, comment, clicks, tags)
      VALUES ($1, $2, $3, $4, $5);
    `,
      [link, date, comment, clicks, tags]
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
};
