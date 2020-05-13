import history from "../history";

export const signIn = () => {
  history.push("/dashboard");
  return {
    type: "SIGN_IN"
  };
};

export const signOut = () => {
  history.push("/login");
  return {
    type: "SIGN_OUT"
  };
};

export const fetchInitMetrics = () => {
  return {
    type: "FETCH_INIT_METR",
    payload: ""
  };
};
