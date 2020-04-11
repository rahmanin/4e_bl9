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
        <Card title="Title 1"/>
        <Card title="Title 2"/>
        <Card title="Title 3"/>
      </Content>
    </div>
  );
}
