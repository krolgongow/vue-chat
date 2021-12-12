<template>
  <base-card>
    <form action="">
      <div>
        <label for="login">Login</label>
        <input type="text" name="password" id="password" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="text" name="password" id="passwrod" />
      </div>
      <base-button>Login</base-button>
      <base-button>Create account</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: #eee;
}
form {
  display: flex;
  flex-direction: column;
}
</style>
