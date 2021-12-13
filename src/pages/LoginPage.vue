<template>
  <base-card>
    <form @submit.prevent="">
      <div class="form-control">
        <label for="login">Login</label>
        <input type="text" name="login" id="login" v-model="login" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </div>
      <div class="buttons-container">
        <base-button @click="loginMethod">Login</base-button>
        <base-button link="/register">Create account</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    loginMethod() {
      console.log("Works");
    },
  },
};
</script>

<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
}
.buttons-container {
  display: flex;
  justify-content: space-between;
}
input {
  border: 1px solid #eee;
  height: 30px;
  font-size: 18px;
  margin-bottom: 15px;
  font-family: "Lato", sans-serif;
}
input:focus {
  background-color: #f1f7ef;
  outline: none;
}
label {
  font-size: 20px;
  margin-bottom: 5px;
}
</style>
