import React from 'react';
import Header from './components/Header/'
import Content from './components/Content/'
import Card from './components/Card/'

import './App.scss';

export default function App() {
  return (
    <div>
      <Header />
      <Content>
        <Card title="Title 1" cardImage="https://image.flaticon.com/icons/svg/1168/1168073.svg"/>
        <Card title="Title 2" cardImage="https://image.flaticon.com/icons/svg/2533/2533433.svg"/>
        <Card title="Title 3" cardImage="https://image.flaticon.com/icons/svg/2782/2782463.svg"/>
      </Content>
    </div>
  );
}
