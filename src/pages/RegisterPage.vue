<template>
  <base-card>
    <form @submit.prevent="">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" />
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
      <div class="form-control">
        <label for="password2">Confirm Password</label>
        <input
          type="password"
          name="password2"
          id="password2"
          v-model="password2"
        />
      </div>
      <div class="buttons-container">
        <base-button type="button" @click="submitForm"
          >Create account</base-button
        >
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        if (this.password === this.password2) {
          await this.$store.dispatch("createNewAcc", {
            email: this.email,
            password: this.password,
          });
          this.$router.replace("/chat");
        } else {
          console.log("passwords are not equal");
          return;
        }
      } catch (err) {
        throw new Error("Nie pyklo");
      }
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
