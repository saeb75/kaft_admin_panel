import { Col, Row } from "antd";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./Components/MainLayout/MainLayout";
import Signin from "./Page/SignIn/Signin";

function App() {
  const style = { background: "#0092ff", padding: "8px 0" };
  return (
    <>
      <Switch>
        <Route path="/signin" component={Signin} />
      </Switch>
    </>
  );
}

export default App;
