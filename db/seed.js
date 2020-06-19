const { client, getAllLinks, createLink } = require("./index");

async function createInitialLink() {
  try {
    console.log("Starting to create links...");

    const theGoog = await createLink({
      link: "http://www.google.com",
      date: "10/10/2020",
      comment: "It's google",
      clicks: "5",
      tags: "Google",
    });

    console.log(theGoog);

    console.log("Finished creating links!");
  } catch (error) {
    console.error("Error creating links!");
    throw error;
  }
}

async function createTables() {
  try {
    await client.query(`
     CREATE TABLE link (
        id SERIAL PRIMARY KEY,
        link varchar(255) NOT NULL,
        date varchar(255) NOT NULL,                                                    
        comment varchar(255) NOT NULL,                                                 
        clicks varchar(255) NOT NULL,
        tags varchar(255) NOT NULL
      );
    `);
  } catch (error) {
    throw error;
  }
}

async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    await client.query(`
      DROP TABLE IF EXISTS link;
    `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Starting to build tables...");

    await client.query(`
      CREATE TABLE link (
        id SERIAL PRIMARY KEY,
        link varchar(255) NOT NULL,
        date varchar(255) NOT NULL,                                                    
        comment varchar(255) NOT NULL,                                                 
        clicks varchar(255) NOT NULL,
        tags varchar(255) NOT NULL
      );
    `);

    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialLink();
  } catch (error) {
    throw error;
  }
}

async function testDB() {
  try {
    const link = await getAllLinks();
    console.log(link);
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
