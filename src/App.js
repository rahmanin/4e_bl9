import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import MainList from './containers/MainList';
import SingleItem from './containers/SingleItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { routes } from "./constants/routes";

import './App.scss';

export default function App() {
  const {index, item} = routes.items;
  return (
    <div>
      <Router>
        <Header />
        <Content>
          <Switch>
            <Redirect exact from="/" to={routes.items.index} />
            <Route path={index} exact component={MainList}/>
            <Route path={item} exact component={SingleItem}/>
          </Switch>
        </Content>
      </Router>
    </div>
  );
}
