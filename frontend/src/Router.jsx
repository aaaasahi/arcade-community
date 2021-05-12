import { Route, Switch, Redirect } from "react-router-dom"


export const Router = () => {
  const currentUser = localStorage.getItem('user')
  return (
    <Switch>
      <Route exact path="/login">
        {currentUser ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/signup">
        {currentUser ? <Redirect to="/" /> : <Signup />}
      </Route>
    </Switch>
  )
}