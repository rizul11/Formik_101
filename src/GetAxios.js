import React, { useEffect } from "react";
import { useState } from "react";
import { Axios } from "react-axios";
const baseURL = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

function GetAxios() {
  
    const [data, setData] = useState(null);
  
    useEffect(() => {
    Axios.get(baseURL).then((response) => {
        setData(response.data);
    });
  });

  return <div></div>;
}

export default GetAxios;
