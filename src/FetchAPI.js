import React, { useEffect, useState } from "react";

function FetchAPI() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products").then((response) => {
      response.json().then((result) => {
        console.log(result)
        setPosts(result.products);
      });
    });
  },[]);
  return (
    <div>
      <ul>
        {posts.map((pst) => {
          return (
            <>
              <li>{pst.id}</li>
              <li>{pst.title}</li>
              <li>{pst.description}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default FetchAPI;
