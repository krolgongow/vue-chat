<template>
  <base-card class="base-card">
    <div class="users">
      <ul>
        <li
          v-for="topic in topicList"
          :key="topic"
          @click="setActiveTopic(topic)"
        >
          {{ topic }}
        </li>
      </ul>
    </div>
    <div class="panel">
      <div class="top">
        <p>{{ activeTopic }}</p>
        <button @click="refresh">
          <i class="fas fa-redo-alt"></i>
        </button>
      </div>
      <div class="messages">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="inputPanel">
        <textarea name="mes" id="mes" cols="40" rows="1"></textarea>
      </div>
    </div>
  </base-card>
  <base-card class="logout-container">
    <base-button class="btn" @click="openModal">New Topic</base-button>
    <base-button class="btn" @click="logout">Logout</base-button>
  </base-card>
  <new-topic
    v-if="creatingNewTopic"
    @close-modal="closeModal"
    @refresh-list="refresh"
  ></new-topic>
</template>

<script>
import NewTopic from "../components/chat/NewTopic.vue";

export default {
  components: {
    NewTopic,
  },
  data() {
    return {
      topicList: [],
      creatingNewTopic: false,
      activeTopic: "",
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/login");
    },
    closeModal() {
      this.creatingNewTopic = false;
    },
    openModal() {
      this.creatingNewTopic = true;
    },
    async refresh() {
      await this.$store.dispatch("updateTopicList");
      this.topicList = this.$store.getters.topicList;
    },
    setActiveTopic(key) {
      this.activeTopic = key;
    },
  },
  created() {
    this.refresh();
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0;
  visibility: hidden;
}
.base-card {
  height: 600px;
  display: flex;
}
.users {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  border-right: 1px solid #222;
  overflow-y: scroll;
}
.users li {
  height: 70px;
  background-color: rgb(100, 209, 86);
  list-style: none;
  border-bottom: 1px solid #222;
  text-align: center;
  color: #eee;
  overflow: hidden;
  cursor: pointer;
}
.panel {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-left: 1px solid #222;
}
.top {
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  height: 50px;
  background-color: rgb(100, 182, 89);
  color: #eee;
}
.top p {
  margin-left: 20px;
  font-weight: bold;
}
.top button {
  height: 40px;
  width: 40px;
  margin-top: 5px;
  font-size: 18px;
  border: 0px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #eee;
  color: #222;
  cursor: pointer;
}
.messages {
  flex-grow: 1;
}
.messages li {
  list-style: none;
  width: 150px;
  height: 50px;
  margin-left: 15px;
  margin-top: 10px;
  border-radius: 15px;
  background-color: rgb(100, 182, 89);
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
.logout-container {
  position: relative;
  display: flex;
  justify-content: space-between;
}
</style>
