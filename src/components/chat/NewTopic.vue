<template>
  <div class="overlay" @click="closeModal">
    <base-card @click.stop>
      <form @submit.prevent="">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" v-model="title" />
        </div>
        <div class="form-control">
          <label for="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="40"
            rows="3"
            v-model="message"
          ></textarea>
        </div>
        <base-button class="submitBtn">Submit</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  emits: ["close-modal"],
  data() {
    return {
      title: "",
      message: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0;
  visibility: hidden;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 50, 50, 0.5);
}
.form-control {
  display: flex;
  flex-direction: column;
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
textarea {
  box-sizing: content-box;
  resize: none;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 18px;
  overflow-y: scroll;
}
textarea:focus {
  outline: none;
}
.submitBtn {
  margin-top: 20px;
}
</style>
