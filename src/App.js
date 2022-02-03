import { BrowserRouter, Switch, Route , Redirect} from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./Pages/home";
import Login from "./Pages/Login/login";
import Signup from "./Pages/Signup/signup";
import AboutUs from "./Pages/AboutUs/aboutus";
import Dashboard from "./Pages/dashboard";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/signup" || pathname === "/dashboard") {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      
      </Switch>
    );
  }
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} exact />
        <Route path="/about_us" component={AboutUs}/>
        <Route path="*">
        <Redirect to="/" />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
