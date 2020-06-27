const { client, getAllLinks, createLink, updateLink } = require("./index");

//ON CONFLICT (name) DO NOTHING;

async function createInitialLink() {
  try {
    console.log("Starting to create links...");

    const theGoog = await createLink({
      link: "http://www.google.com",
      date: "10/10/2020",
      comment: "It's google",
      tags: ["Google"],
    });

    const redditEdit = await createLink({
      link: "http://www.reddit.com",
      date: "10/2/2020",
      comment: "It's reddit yo",
      tags: ["Reddit"],
    });

    const plexTv = await createLink({
      link: "http://www.plex.tv",
      date: "10/17/2020",
      comment: "It's for my movies",
      tags: ["Plex", "New"],
    });

    console.log(theGoog, redditEdit, plexTv);

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
        link varchar(255) UNIQUE NOT NULL,
        date varchar(255) NOT NULL,                                                    
        comment varchar(255) NOT NULL,                                                 
        clicks integer DEFAULT 0
      );  
      CREATE TABLE tags (
          id SERIAL PRIMARY KEY,
          name varchar(255) UNIQUE NOT NULL
      );
      CREATE TABLE taglinks (
          id SERIAL PRIMARY KEY,
          "linkId" SERIAL REFERENCES link (id),
          "tagId" SERIAL REFERENCES tags (id),
          UNIQUE("linkId", "tagId")
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
    DROP TABLE IF EXISTS taglinks;
    DROP TABLE IF EXISTS tags;
    DROP TABLE IF EXISTS link;
    `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
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
    console.log("Calling updateLink on link[0]");
    const link = await getAllLinks();
    console.log(link);
    // const updateUserResult = await updateLink(link[0].id, {
    //   link: "http://www.plex.tv/newStuff",
    //   date: "10/17/2020",
    //   comment: "It's for my movies",
    //   clicks: "3",
    // });
    // console.log("Result:", updateUserResult);
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
