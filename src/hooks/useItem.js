import { useState, useEffect } from "react";

export const useItem = shipId => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/ships/${shipId}`)
      .then(response => response.json())
      .then(item => {
        setItem(item);
      });
  }, [shipId]);

  return {
    item
  };
};