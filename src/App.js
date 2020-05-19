import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import MainList from './routes/MainList';
import SingleItem from './routes/SingleItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { routes } from "./constants/routes";
import FavouritesList from "./routes/FavouritesList"

import './App.scss';

export default function App() {
  const {index, item, favs} = routes.items;
  return (
      <Router>
        <Header />
        <Content>
          <Switch>
            <Redirect exact from="/" to={routes.items.index} />
            <Route path={index} exact component={MainList}/>
            <Route path={item} exact component={SingleItem}/>
            <Route path={favs} exact component={FavouritesList}/>
          </Switch>
        </Content>
      </Router>
  );
}
