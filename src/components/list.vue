<template>
  <div class="userList">
    <ol v-for="(user, index) in userList" :key="index">
      <li @click="deleteUser(index)">
        <span :class="{ deleteBorder: borderActive }"
          >{{ user.userName }} / {{ user.phoneNumber }}</span
        >
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ["userList", "borderActive"],
  methods: {
    deleteUser(index) {
      this.userList.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.userList {
  background-color: rgba(245, 222, 179, 0.26);
  height: 130px;
  padding: 5px 20px;
  width: 250px;
  border-radius: 25px;
  box-shadow: 4px 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  overflow-x: hidden;
  li {
    list-style: none;
    font-size: 15px;
    margin: 10px;
  }
}

.deleteBorder {
  cursor: pointer;
  text-decoration: underline;
  padding: 7px;
  font-size: 14px;
  border-radius: 25px;
  color: rgb(145, 30, 30);
}

@media only screen and (max-width: 700px) {
  .userList {
    width: 220px;
  }
}
</style>
