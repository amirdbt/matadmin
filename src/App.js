import React from "react";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/Sidebard";
import Ecommerce from "./components/Ecommerce";
import Products from "./components/Products";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Utilities/Theme";

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
        <Route path="/products" component={Products} />
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
