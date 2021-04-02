<template>
  <div class="inputBody">
    <!--Custom input to target prop and emit update on @input-->
    <div class="inputPair">
      <input
        type="text"
        :value="value.userName"
        ref="username"
        @input="updateValue()"
        placeholder="Type Name"
      />
      <input
        type="number"
        ref="phonenumber"
        :value="value.phoneNumber"
        @input="updateValue()"
        placeholder="Type Phone Number"
      />
    </div>
    <div class="warning">
      <p v-if="value.phoneNumber.length > 0 && value.phoneNumber.length !== 10">
        &#40;Must Contain 9 digits&#41;
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "inputForm",
  props: ["value"],
  data() {
    return {};
  },
  methods: {
    updateValue() {
      this.$emit("input", {
        userName: this.$refs.username.value,
        phoneNumber: this.$refs.phonenumber.value,
      });
    },
  },
};
</script>

<style lang="scss">
.inputBody {
  display: flex;
  align-items: center;
  flex-direction: column;
  .warning {
    position: absolute;
    p {
      color: red;
      font-size: 15px;
    }
  }
}
.inputPair {
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
    border-radius: 20px;
    border: none;
    box-shadow: 4px 4px 8px;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    padding: 15px;
    margin: 15px;
  }
}

@media only screen and (max-width: 600px) {
  .inputPair {
    margin-top: 0px;
  }
  .warning {
    position: relative;
  }
}

@media only screen and (max-width: 700px) {
  input {
    width: 220px;
  }
}
</style>
