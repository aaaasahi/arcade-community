import { Route, Switch, Redirect } from "react-router-dom"

import { Login } from './components/auth/Login'
import { Signup } from './components/auth/Signup'
import { IndexCommunity } from './components/community/IndexCommunity'


export const Router = () => {
  const currentUser = localStorage.getItem('user')
  return (
    <Switch>
      <Route exact path={"/"} component={IndexCommunity} />
      <Route exact path="/login">
        {currentUser ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/signup">
        {currentUser ? <Redirect to="/" /> : <Signup />}
      </Route>
    </Switch>
  )
}