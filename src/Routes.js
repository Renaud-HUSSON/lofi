import {Route, Switch} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

const Routes = () => {
  return <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
  </Switch>
}

export default Routes