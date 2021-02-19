<template>
  <div>
    <!--Stop Modifier to prevent Bubbling-->
    <div @click.stop="borderActive = false" class="userContainer">
      <div class="title">
        <h3>User</h3>
      </div>
      <div class="body">
        <!--List compenent registration-->
        <user-list
          :borderActive="borderActive"
          :userList="recordedUsers"
        ></user-list>
      </div>
      <div class="footer">
        <button @click.stop="borderActive = !borderActive">
          Delete Record
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
import userList from "./list";

export default {
  name: "rightPanel",
  components: {
    "user-list": userList,
  },
  data() {
    return {
      recordedUsers: [],
      borderActive: false,
    };
  },
  created() {
    //Recieve emitted data
    bus.$on("addBudget", (data) => {
      this.recordedUsers = data;
      console.log(this.recordedUsers);
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.userContainer {
  background-color: rgba(152, 160, 150, 0.219);
  border: 1px black;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  box-shadow: 4px 4px 8px;
  .body {
    margin: 20px;
  }
  .footer {
    cursor: pointer;
    button {
      border-radius: 20px;
      border: none;
      padding: 15px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .userContainer {
    background-color: rgba(250, 235, 215, 0);
    box-shadow: none;
    .body {
      margin-top: -10px;
      margin-bottom: 10px;
    }
  }

  button {
    border-radius: 20px;
    border: none;
    box-shadow: 4px 4px 8px;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    padding: 15px;
  }
}
</style>
