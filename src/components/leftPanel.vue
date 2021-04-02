<template>
  <div class="inputContainer">
    <!--Title-->
    <div class="title">
      <h3>Add User</h3>
    </div>
    <div class="inputBody">
      <!-- Custom Input Component-->
      <input-form v-model="userProfile"></input-form>
      <!--Button disabled conditional-->
    </div>
    <div class="inputFooter">
      <!--Phone Number Alert-->

      <button
        :disabled="
          userProfile.phoneNumber.length !== 10 ||
            userProfile.userName.length < 1
        "
        @click="submitUser()"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
//Bus to enable sister component communication
import { bus } from "../main";
import inputForm from "./form";

export default {
  name: "leftPanel",
  components: {
    "input-form": inputForm,
  },
  data() {
    return {
      userInfo: [],
      userProfile: {
        userName: "",
        phoneNumber: "",
      },
      disableButton: true,
    };
  },

  methods: {
    //Pass to sibling using global bus
    submitUser() {
      this.userInfo.push({
        userName: this.userProfile.userName,
        phoneNumber: this.userProfile.phoneNumber,
      });
      bus.$emit("addBudget", this.userInfo);
      this.userProfile.userName = "";
      this.userProfile.phoneNumber = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.inputContainer {
  background-color: rgba(160, 153, 150, 0.219);
  border: 1px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  padding: 25px;
  box-shadow: 4px 4px 8px;
  .inputBody {
    flex-basis: 80%;
    width: 100%;
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
