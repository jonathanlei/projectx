import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import SignupForm from "./SignupForm";
import Nav from "./Nav";
// import UserContext from "./userContext";
// import { useContext } from "react";

/** Routes Component
 * 
 * Props:
 * - currentUser: {}
 * - logout: function passed from App
 * - login: function passed from App
 * - signup: function passed from App
 * -applyToJob: function passed from App
 * 
 * State: none
 * 
 * App -> Routes -> {Homepage, CompanyList, CompanyDetail, JobList, LoginForm, SignupForm, ProfileForm}
 * */
function Routes({ login, logout, signup, updateProfile, applyToJob}) {
  // const currentUser = useContext(UserContext);

  return (
    <>
      <Nav logout={logout} />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        {/* <Route exact path="/trips">
          {currentUser ? <CompanyList /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/trips/:id">
          {currentUser ? <CompanyDetail applyToJob={applyToJob} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/jobs">
          {currentUser ? <JobList applyToJob={applyToJob} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/profile">
          {currentUser ? <ProfileForm updateProfile={updateProfile}/> : <Redirect to="/" />}
        </Route>
        <Route exact path="/login">
          {!currentUser ? <LoginForm login={login} /> : <Redirect to="/" />}
        </Route> */}
        <Route exact path="/signup">
          {true ? <SignupForm signup={signup} /> : <Redirect to="/" />}
        </Route>
        <Redirect to="/" />
      </Switch>
    </>);
}

export default Routes;