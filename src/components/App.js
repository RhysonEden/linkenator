import React, { useState, useEffect } from "react";
import Form from "./form";

import { getSomething } from "../api";
import { data as links } from "../api";

const App = () => {
  const [message, setMessage] = useState("");
  const [links, setLinks] = useState([]);
  useEffect(() => {
    getSomething()
      .then((response) => {
        setLinks(response.allLinks);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1 id="black">It's the Linkenator! You'll be back....</h1>
        <h2>Create your own link by filling out the form below!</h2>
        {/* </div>
      <div className="form"> */}
        <Form />
      </div>
      <div id="contenwrap">
        <div className="links">
          {links.map((links, index) => (
            <div className="ps">
              <h3>
                <p>
                  <a href={links.link} key={index}>
                    Click here to go to
                  </a>
                </p>
                <p>{links.link}</p>
              </h3>
              <p>{links.comment}</p>
              <p>{links.clicks}</p>
            </div>
          ))}{" "}
        </div>
      </div>
      <h2>{message}</h2>
    </div>
  );
};
{
  /* <div className="links">
   {
       links.map(...)
   }
</div> */
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <div className="page-deets">
//         <h2>Iterate over Array and display data</h2>
//       </div>

//       {/_ Iterate over imported array in userData _/}
//       <div className="users">
//         {users.map((user, index) => (
//           <div key={index}>
//             <h3>{user.name}</h3>
//             <p>{user.location}</p>
//             <p>{user.car}</p>
//           </div>
//         ))}
//       </div>
//       <ScotchInfobar />
//     </div>
//   );
// }
