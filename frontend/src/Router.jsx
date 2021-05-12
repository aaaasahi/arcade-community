import { Route, Switch, Redirect } from "react-router-dom"

import { Login } from './components/auth/Login'
import { Signup } from './components/auth/Signup'
import { IndexCommunity } from './components/community/IndexCommunity'
import { Profile } from './components/profile/Profile'
import { IndexEvent } from './components/event/IndexEvent'


export const Router = () => {
  const currentUser = localStorage.getItem('user')
  return (
    <Switch>
      <Route exact path={"/", "/community" } component={IndexCommunity} />
      <Route exact path="/login">
        {currentUser ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/signup">
        {currentUser ? <Redirect to="/" /> : <Signup />}
      </Route>
      <Route exact path={"/profile"} component={Profile} />
      <Route exact path={"/event"} component={IndexEvent} />
    </Switch>
  )
}