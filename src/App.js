import React from 'react';
import Header from './components/Header/';
import Content from './components/Content/';
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
  return (
    <div>
      <Router>
        <Header />
        <Content>
          <Switch>
            <Redirect exact from="/" to={routes.items.index} />
            <Route path={routes.items.index} exact component={MainList}/>
            <Route path={routes.items.item} exact component={SingleItem}/>
          </Switch>
        </Content>
      </Router>
    </div>
  );
}
