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
      <input id="date" placeholder={moment().format("L")}></input>
      <input
        id="link"
        value={url}
        placeholder="link"
        onChange={changeUrl}
      ></input>
      <input
        id="comment"
        value={comment}
        placeholder="comment"
        onChange={changeComment}
      ></input>
      <input
        id="tags"
        value={tags}
        placeholder="tags"
        onChange={changeTags}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <h2>Add your own links here!</h2>
//           <input
//             id="date"
//             placeholder={moment().format("L")}
//             defaultValue={this.state.date}
//           />
//           <input
//             id="link"
//             placeholder="link"
//             value={this.state.link}
//             onChange={(event) => this.setState({ link: event.target.value })}
//           />
//           <input
//             id="comment"
//             placeholder="comment"
//             value={this.state.comment}
//             onChange={(event) => this.setState({ comment: event.target.value })}
//           />
//           <input
//             id="tag"
//             placeholder="tag"
//             value={this.state.tag}
//             onChange={(event) => this.setState({ tag: event.target.value })}
//           />
//           <button>Submit</button>
//         </form>
//       </>
//     );
//   }
