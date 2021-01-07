import instance from "../helper/axios";

export const signIn = (form) => (dispatch) => {
  console.log(form);
  instance
    .post("admin/signin", form)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
