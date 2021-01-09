const { Route, Redirect } = require("react-router-dom");

const PriviteRoute = ({ Component, authenticate, ...rest }) => {
  let token = localStorage.getItem("token");
  return (
    <Route
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PriviteRoute;
