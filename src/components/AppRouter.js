import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationList from './LocationsList';
import EpisodesList from './EpisodesList';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' component={CharacterList} />
      <Route path='/location' component={LocationList} />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/episodes' component={EpisodesList} />
    </Switch>
  </div>

}