import { useState, useEffect } from "react";

export const useItem = ship_id => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/ships/${ship_id}`)
      .then(response => response.json())
      .then(item => {
        setItem(item);
      });
  }, [ship_id]);

  return {
    item
  };
};