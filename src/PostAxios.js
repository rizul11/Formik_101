import React from "react";
import { useState } from "react";

function PostAxios() {
  const [my_title, setTitle] = useState("");
  const [my_body, setBody] = useState("");
  return (
    <>
      <form>
        <label>Enter Title :</label>
        <input
          type="text"
          name="title"
          value={my_title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label>Enter Body :</label>
        <input
          type="text"
          name="body"
          value={my_body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br /> <br />
        <input type="submit" value="Post" />
      </form>
    </>
  );
}

export default PostAxios;
