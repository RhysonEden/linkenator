import React, { useState, userForm } from "react";
import moment from "moment";
import { createStuff } from "../api";
export default function Form({ handleRefresh }) {
  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");
  const [tags, setTags] = useState("");

  const cancelCourse = () => {
    console.log("canceCourse Link 10 form.JS");
    setUrl("");
    setComment("");
    setTags("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createStuff(url, new Date(), comment, tags).then(() => {
      cancelCourse();
      handleRefresh();
    });
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
    <form id="create">
      <input
        className="form-input"
        id="date"
        placeholder={moment().format("dddd")}
      ></input>
      <input
        className="form-input"
        id="link"
        value={url}
        placeholder="Enter Link"
        onChange={changeUrl}
      ></input>
      <input
        className="form-input"
        id="comment"
        value={comment}
        placeholder="Enter Comment"
        onChange={changeComment}
      ></input>
      <input
        className="form-input"
        id="tags"
        value={tags}
        placeholder="Enter Tag(s)"
        onChange={changeTags}
      ></input>
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
