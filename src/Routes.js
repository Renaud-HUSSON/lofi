import {Route, Switch} from 'react-router-dom'
import About from './pages/About'
import Collection from './pages/Collection'
import React from 'react'
import Home from './pages/Home'

const Routes = React.memo(() => {
  return <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/collection" component={Collection}/>
  </Switch>
})

export default Routes