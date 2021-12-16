import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
      topicList: [],
    };
  },
  mutations: {
    setUser(state, payload) {
      state.userId = payload.userId;
      state.token = payload.token;
    },
    setTopicList(state, payload) {
      state.topicList = payload;
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    token(state) {
      return state.token;
    },
    userId(state) {
      return state.userId;
    },
    topicList(state) {
      return state.topicList;
    },
  },
  actions: {
    async createNewAcc(context, payload) {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXC6KHYEhDXv98t2aavv52mLXLOnjkYl0",
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("userId", responseData.localId);
      context.commit("setUser", {
        userId: responseData.userId,
        token: responseData.idToken,
      });
    },
    async login(context, payload) {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXC6KHYEhDXv98t2aavv52mLXLOnjkYl0",
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("userId", responseData.localId);
      context.commit("setUser", {
        userId: responseData.userId,
        token: responseData.idToken,
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
    async updateTopicList(context) {
      const token = context.getters.token;
      const response = await fetch(
        `https://vue-chat-e8fb7-default-rtdb.europe-west1.firebasedatabase.app/topics.json?auth=${token}`
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("error");
      }

      const list = Object.keys(responseData);

      context.commit("setTopicList", list);
    },
  },
});

export default store;
