import React, { useState, useEffect } from "react";
import Form from "./form";
import Search from "./Search";

import { getSomething, getSomethingElse, updateClicks } from "../api";
// import { data as links } from "../api";

function handleRefresh(setLinks, setMessage, setTags) {
  return function () {
    getSomething()
      .then((response) => {
        setLinks(response.allLinks);
      })
      .catch((error) => {
        setMessage(error.message);
      });
    getSomethingElse()
      .then((response) => {
        setTags(response.allTags);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };
}

const helloWorld = () => {
  console.log("hello world");
};
const App = () => {
  const [message, setMessage] = useState("");
  const [links, setLinks] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // const [clicks, setClicks] = setState(0);

  useEffect(() => {
    getSomething()
      .then((response) => {
        setLinks(response.allLinks);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  useEffect(() => {
    getSomethingElse()
      .then((response) => {
        setTags(response.allTags);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  });
  //

  return (
    <div className="App">
      <div className="header">
        <h1 id="black">It's the Linkenator! You'll be back....</h1>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />

        <h2>Create your own link by filling out the form below!</h2>
        <h2>For multiple tags leave a space between them!</h2>
        <Form handleRefresh={handleRefresh(setLinks, setMessage, setTags)} />
      </div>
      <div id="contentwrap">
        <div className="links">
          {links
            .filter((links) => {
              const linksLowerCased = links.link.toLowerCase();
              if (linksLowerCased.includes(searchInput.toLowerCase())) {
                return true;
              }
              const tagsInclude = links.tags.filter((tag) => {
                const tagsLowerCased = tag.name.toLowerCase();
                if (tagsLowerCased.includes(searchInput.toLowerCase())) {
                  return true;
                } else {
                  return false;
                }
              });
              if (tagsInclude.length > 0) {
                return true;
              }
              return false;
            })
            .map((links, index) => (
              <div key={index} className="ps">
                <h3>
                  <p>
                    <a href={links.link} key={`${index}_link`} target="_new">
                      <button
                        id="linkbutton"
                        onClick={async () => {
                          await updateClicks(links.id, links.clicks);
                          handleRefresh(setLinks, setMessage, setTags)();
                        }}
                      >
                        Click here to go to
                      </button>
                    </a>
                  </p>
                  <p>{links.link}</p>
                </h3>
                <p>Added on: {links.date}</p>
                <p>Comments:{links.comment}</p>
                <p>Number of clicks:{links.clicks}</p>

                <p>
                  Tagged as:
                  {links.tags.map((tags, index) => (
                    <div key={index}>{tags.name}</div>
                  ))}{" "}
                </p>
              </div>
            ))}{" "}
        </div>
      </div>
      <h2>{message}</h2>
    </div>
  );
};

export default App;
