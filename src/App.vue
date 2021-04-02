<template>
  <div class="app">
    <div class="container">
      <div class="title">
        <h1>Phone Book App</h1>
      </div>
      <!--leftPanel and rightPanel are siblings and data traanfers directly-->
      <left-panel class="left"></left-panel>
      <right-panel class="right"></right-panel>
    </div>
  </div>
</template>

<script>
import leftPanel from "./components/leftPanel.vue";
import rightPanel from "./components/rightPanel.vue";

export default {
  name: "App",
  components: {
    "left-panel": leftPanel,
    "right-panel": rightPanel,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.app {
  height: 100vh;
}
/*Grid area to specifty component position*/
.container {
  height: 100%;
  display: grid;
  column-gap: 10px;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-areas:
    "top top"
    "left right";
  padding-left: 20px;
  padding-right: 20px;
  background-image: linear-gradient(30deg, #cc2b5e, #753a88);
  .title {
    grid-area: top;
    display: flex;
    justify-content: center;
  }
  .left {
    grid-area: left;
  }
  .right {
    grid-area: right;
  }
}

@media only screen and (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column;
    .title {
      margin: 20px;
    }
    .left {
      width: 400px;
    }
    .right {
      width: 470px;
    }
  }
}
@media only screen and (max-width: 415px) {
  .container {
    display: flex;
    flex-direction: column;
    .title {
      margin: 20px;
    }
    .left {
      width: 300px;
    }
    .right {
      width: 470px;
    }
  }
}
</style>
