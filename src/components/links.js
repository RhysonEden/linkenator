// import React, { useState, userForm } from "react";
// import { getSomething } from "../api";
// import axios from "axios";
export default async function Links() {
  const contact = await getSomething();
  console.log("line 7", contact);
  return contact;
}

// export default async function renderLinks() {
//   try {
//     let res = await axios.get("/api/links");
//     console.log(res);
//     let links = res.data;
//     this.setState({
//       Links: links.map((link, i) => (
//         <li key={i} className="list-group-item">
//           {link.text}
//         </li>
//       )),
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// render() {
//   return (
//     <div>
//       <ul className="list-group list-group-flush">
//         {this.state.Posts}
//       </ul>
//     </div>
//   );
// }
