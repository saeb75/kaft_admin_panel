import { Col, Row } from "antd";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./Components/MainLayout/MainLayout";
import Signin from "./Page/SignIn/Signin";
import PriviteRoute from "./Components/HOC/PrivateRoute";
import { Home } from "./Page/Home/Home";
import { useSelector } from "react-redux";
import Users from "./Page/Users/Users";
import "antd/dist/antd.css";
function App() {
  const auth = useSelector((state) => state.auth);
  const style = { background: "#0092ff", padding: "8px 0" };
  return (
    <>
      <Switch>
        <PriviteRoute exact path="/" Component={Home} />
        <PriviteRoute exact path="/users" Component={Users} />
        <Route path="/signin" component={Signin} />
      </Switch>
      {/* <Row justify="center">
        <Col span={4} md={24}>
          col-4
        </Col>
        <Col span={4} md={24}>
          col-4
        </Col>
        <Col span={4} md={24}>
          col-4
        </Col>
        <Col span={4} md={24}>
          col-4
        </Col>
      </Row> */}
    </>
  );
}

export default App;
