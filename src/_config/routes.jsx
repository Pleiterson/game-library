import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../features/home/pages/';
import Games from '../features/games/pages/';
import Sale from '../features/saleGame/pages/';
import Achievements from '../features/achievements/pages/';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/games" component={Games}/>
        <Route path="/sale" component={Sale}/>
        <Route path="/achievements" component={Achievements}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
