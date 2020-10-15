import React from "react";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/Sidebard";
import Ecommerce from "./components/Ecommerce";
import Products from "./components/Products";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Utilities/Theme";

const Main = withRouter(({ location }) => {
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <>
          <SideBar />
        </>
      )}
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/ecommerce" component={Ecommerce} />
        <Route path="/products" component={Products} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </>
  );
});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
