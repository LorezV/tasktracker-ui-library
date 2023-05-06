<template>
    <button class="cButton" :class="classes" :disabled="disabled">
        <span class="cButton-icon" v-if="startIcon">
            <CIcon :name="startIcon" v-if="startIcon"/>
        </span>
        <span class="cButton-content">
            <slot>Button</slot>
        </span>
        <span class="cButton-icon" v-if="endIcon">
            <CIcon :name="endIcon" v-if="endIcon"/>
        </span>
    </button>
</template>

<script>
import CIcon from "../Icon/Icon.vue";

export default {
    name: 'c-button',
    components: {CIcon},
    props: {
        variant: {
            type: String,
            default: "primary",
            required: false
        },
        size: {
            type: String,
            default: "medium",
            required: false
        },
        color: {
            type: String,
            default: "contained",
            required: false
        },
        startIcon: {
            type: String,
            required: false
        },
        endIcon: {
            type: String,
            required: false
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    computed: {
        classes() {
            const classes = []
            classes.push(`variant-${this.variant}`)
            classes.push(`color-${this.color}`)
            classes.push(`size-${this.size}`)

            return classes
        }
    }
}
</script>

<style scoped lang="scss">
@use "sass:color";
@import "../../styles/stylebase";

.cButton {
  border: none;
  outline: none;
  user-select: none;
  cursor: pointer;
  border-radius: $border-radius;
  display: inline-flex;
  align-items: center;

  text-transform: uppercase;
  font-weight: 500;
  padding: var(--padding-v-local) var(--padding-h-local);
  transition: background-color .2s, color .2s, border-color .2s;

  &-icon {
    display: inline-flex;

    &:first-child {
      margin-right: 8px;
      margin-left: -4px;
    }

    &:last-child {
      margin-left: 8px;
      margin-right: -4px;
    }
  }

  @each $name, $color in $colors {
    &.color-#{$name} {
      --button-background: #{$color};
      --button-background-tonal: #{color.change($color, $alpha: 0.1)};
      --button-hover-background: #{color.adjust($color, $blackness: 10%)};
      --button-hover-background-tonal: #{color.change($color, $alpha: 0.2)};
      --button-border-color: #{color.change($color, $alpha: 0.6)};
      --button-text-color: #{get-text-color($color)};
      --button-text-hover-color: #{color.change($color, $alpha: 0.1)};
    }
  }

  @mixin padding-variables($vertical, $horizontal) {
    --padding-v-local: #{$vertical};
    --padding-h-local: #{$horizontal};
  }

  &.size-small {
    @include padding-variables(6px, 12px);
    font-size: 12px;
  }

  &.size-medium {
    @include padding-variables(8px, 16px);
    font-size: 14px;
  }

  &.size-large {
    @include padding-variables(10px, 20px);
    font-size: 16px;
  }

  &.variant-contained {
    background-color: var(--button-background);
    color: var(--button-text-color);

    &:hover {
      background-color: var(--button-hover-background);
    }
  }

  &.variant-text {
    color: var(--button-background);
    background-color: transparent;

    &:hover {
      background-color: var(--button-text-hover-color);
    }
  }

  &.variant-outlined {
    @extend .variant-text;
    border: 1px solid var(--button-border-color);
    padding: calc(var(--padding-v-local) - 1px) calc(var(--padding-h-local) - 1px);

    &:hover {
      border-color: var(--button-background);
    }
  }

  &.variant-tonal {
    background-color: var(--button-background-tonal);
    color: var(--button-background);

    &:hover {
      background-color: var(--button-hover-background-tonal);
    }
  }

  &:disabled {
    --button-background: #{$color-disabled};
    --button-border-color: #{$color-disabled};
    --button-text-color: #{$color-disabled};
    pointer-events: none;
  }
}
</style>