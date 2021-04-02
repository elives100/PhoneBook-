<template>
  <div class="app">
    <div class="container">
      <div class="title">
        <h1>Phone Book App</h1>
      </div>
      <!--leftPanel and rightPanel are siblings and data traanfers directly-->
      <div class="panelCont">
        <left-panel class="left"></left-panel>
        <right-panel class="right"></right-panel>
      </div>
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
  display: grid;
  height: 100%;
  align-items: center;
  grid-template-areas:
    "top top"
    "bottom bottom";
  padding: 20px;
  background-image: linear-gradient(30deg, #cc2b5e, #753a88);
  .title {
    grid-area: top;
    display: flex;
    justify-content: center;
  }
  .panelCont {
    grid-area: bottom;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media only screen and (max-width: 600px) {
}
@media only screen and (max-width: 415px) {
}
</style>
