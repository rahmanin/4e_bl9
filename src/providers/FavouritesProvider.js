import React, {useState, useCallback} from 'react';

export const FavoritesContext = React.createContext(new Set());

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  console.log('11111', favorites)

  const addToFavorites = useCallback(
    item => {
      const nextFavorites = [...favorites, {...item, isFavourite: true}];
      setFavorites(nextFavorites);
    },
    [favorites]
  );

  const deleteFromFavorites = useCallback(
    item => {
      item.isFavourite = false;
      console.log('adasdas', item.isFavourite);
      const nextFavorites = favorites.filter(fav => fav.ship_id !== item.ship_id);;
      setFavorites(nextFavorites);
    },
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        deleteFromFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}