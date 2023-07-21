import { useSelector } from "react-redux";
import "./App.css";
import Registration from "./components/Auth/Registration"
import Login from "./components/Auth/Login";
import Home from "./components/pages/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/pages/About";
import Indbox from "./components/Mail/InboxPage";
import Mails from "./components/Mail/ReadMails";
import SendBox from "./components/Mail/SendBox";
import ReadSendMail from "./components/Mail/ReadSendMail";
import Forget from "./components/Auth/Forget";

function App() {
  const isLogin = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Layout>
        <Switch>
          {!isLogin && (
            <Route path="/" exact>
              <Redirect to="login" />
            </Route>
          )}

          {!isLogin && (
            <Route path="/login">
              <Login />
            </Route>
          )}

          {!isLogin && (
            <Route path="/forgot">
              <Forget />
            </Route>
          )}

          {!isLogin && (
            <Route path="/register">
              <Registration />
            </Route>
          )}
          {isLogin && (
            <Route path="/home">
              <Home />
            </Route>
          )}
          {isLogin && (
            <Route path="/about">
              <About />
            </Route>
          )}

          {isLogin && (
            <Route exact path="/sendmail">
              <SendBox />
            </Route>
          )}

          {isLogin && (
            <Route path="/sendmail/:id">
              {" "}
              <ReadSendMail />
            </Route>
          )}
          {isLogin && (
            <Route exact path="/email">
              <Indbox />
            </Route>
          )}

          {isLogin && (
            <Route path="/email/:id">
              {" "}
              <Mails />
            </Route>
          )}
          {!isLogin && (
            <Route path="*">
              <Redirect to="/login" />
              <Login />
            </Route>
          )}
          {isLogin && (
            <Route path="*">
              <Redirect to="/home" />
              <Home />
            </Route>
          )}
        </Switch>
      </Layout>
    </>
  );
}

export default App;