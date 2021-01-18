import { Col, Row } from "antd";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./Components/MainLayout/MainLayout";
import Signin from "./Page/SignIn/Signin";
import PriviteRoute from "./Components/HOC/PrivateRoute";
import { Home } from "./Page/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import Users from "./Page/Users/Users";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";

import { AllCategory } from "./Page/AllCategory/AllCategory";
import Product from "./Page/Product/Product";
import { isUserLoggedIn } from "./Action/AuthAction";
import { useEffect } from "react";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const style = { background: "#0092ff", padding: "8px 0" };
  useEffect(() => {
    dispatch(isUserLoggedIn());
    console.log("loginControl");
  }, []);

  return (
    <>
      <ConfigProvider direction="rtl">
        <Switch>
          <PriviteRoute exact path="/" Component={Home} />
          <PriviteRoute exact path="/users" Component={Users} />
          <PriviteRoute exact path="/category" Component={AllCategory} />
          <PriviteRoute exact path="/product" Component={Product} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </ConfigProvider>
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
