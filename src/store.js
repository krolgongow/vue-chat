import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userId: null,
      token: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.userId = payload.userId;
      state.token = payload.token;
    },
  },
  getters: {},
  actions: {
    createNewAcc(context, payload) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXC6KHYEhDXv98t2aavv52mLXLOnjkYl0",
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem("token", response.idToken);
          localStorage.setItem("userId", response.localId);
          context.commit("setUser", {
            userId: response.userId,
            token: response.idToken,
          });
        });
    },
    login(context, payload) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXC6KHYEhDXv98t2aavv52mLXLOnjkYl0",
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem("token", response.idToken);
          localStorage.setItem("userId", response.localId);
          context.commit("setUser", {
            userId: response.userId,
            token: response.idToken,
          });
        });
    },
    tryLogin(context) {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      if (token && userId) {
        context.commit("setUser", {
          token: token,
          userId: userId,
        });
      }
    },
    logout(context) {
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      context.commit("setUser", {
        token: "",
        userId: "",
      });
    },
  },
});

export default store;
