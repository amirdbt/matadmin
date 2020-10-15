import React from "react";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/Sidebard";
import Ecommerce from "./components/Ecommerce";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";

const Main = withRouter(({ location }) => {
  return (
    <>
      {location.pathname !== "/signin" && (
        <>
          <SideBar />
        </>
      )}
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/ecommerce" component={Ecommerce} />
      </Switch>
    </>
  );
});
function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
