import React, { useState, useEffect } from "react";
import Form from "./form";

import { getSomething } from "../api";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getSomething()
      .then((response) => {
        setMessage(response.message);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  });

  return (
    <div className="App">
      <h1>It's the Linkenator! You'll be back....</h1>
      <Form />
      <h2>{message}</h2>
    </div>
  );
};

export default App;
