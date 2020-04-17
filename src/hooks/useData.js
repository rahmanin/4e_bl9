import { useEffect, useState } from "react";

export const useData = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/ships')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }, []);
  return {
    data
  };
};

