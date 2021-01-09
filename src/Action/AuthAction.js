import instance from "../helper/axios";
import { SIGNIN_FAILED, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./ActionType";

export const signIn = (form) => (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST });
  instance
    .post("admin/signin", form)
    .then((res) => {
      console.log(res.data);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: SIGNIN_SUCCESS, payload: { user, token } });
    })
    .catch((err) => dispatch({ type: SIGNIN_FAILED }));
};
