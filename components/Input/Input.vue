<template>
  <div class="cInput" :class="[...colorClasses]">
      <input :type="inputType"/>
  </div>
</template>

<script>
import colorMixin from "../../mixins/color"

export default {
    name: "c-input",
    mixins: [colorMixin],
    props: {
        placeholder: {
            type: String,
            default: "",
            required: false
        },
        inputType: {
            type: String,
            default: "white",
            required: false
        },
        min: {
            type: Number,
            default: -Infinity,
            required: false
        },
        max: {
            type: Number,
            default: Infinity,
            required: false
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../styles/stylebase";

.cInput {
  display: flex;
  padding: 8px;
  border-radius: $border-radius;
  border-style: solid;
  border-width: 2px;

  @include colors-for-input;

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    color: inherit;
    background: none;
  }

  input::placeholder {
    color: red;
  }
}
</style>