import React, { useState, userForm } from "react";
import moment from "moment";
import { createStuff } from "../api";
export default function Form() {
  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createStuff(url, new Date(), comment, tags);
    console.log(setUrl(event.target.value));
  };

  const changeUrl = (event) => {
    setUrl(event.target.value);
  };

  const changeComment = (event) => {
    setComment(event.target.value);
  };

  const changeTags = (event) => {
    setTags(event.target.value);
  };

  return (
    <div>
      <input
        className="form-input"
        id="date"
        placeholder={moment().format("L")}
      ></input>
      <input
        className="form-input"
        id="link"
        value={url}
        placeholder="link"
        onChange={changeUrl}
      ></input>
      <input
        className="form-input"
        id="comment"
        value={comment}
        placeholder="comment"
        onChange={changeComment}
      ></input>
      <input
        className="form-input"
        id="tags"
        value={tags}
        placeholder="tags"
        onChange={changeTags}
      ></input>
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
