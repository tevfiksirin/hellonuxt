<template>
  <div
    class="
      inline-block
      transition-colors
      duration-300
      ease-linear
      bg-gray-200
      rounded-full
      nui-select
      text-nuxt-gray
      dark:bg-dark-surface
      dark:text-dark-onSurfaceSecondary
    "
  >
    <div class="flex items-center content-center px-4 bg-indigo-300">
      <div class="-mr-4">
        <slot name="icon" />
      </div>
      <select
        v-model="selectedValue"
        @change="onChange(selectedValue)"
        class="
          z-10
          h-10
          pl-6
          pr-8
          font-medium
          bg-transparent
          appearance-none
          cursor-pointer
          focus:outline-none
        "
        :aria-label="label"
      >
        <option
          v-for="(locale, index) in $i18n.locales"
          :key="index"
          :value="locale.code"
          class="dark:text-dark-surface"
        >
          {{ locale.name }}
        </option>
      </select>
      <CaretDownIcon class="-ml-4" />
    </div>
  </div>
</template>

<script>
import CaretDownIcon from "~/assets/icons/caret-down.svg?inline";

const Modes = Object.freeze({
  SLIM: "slim",
  NORMAL: "normal",
});

export default {
  components: {
    CaretDownIcon,
  },
  data() {
    return {
      selectedValue: "",
    };
  },
  created() {
    this.selectedValue = this.$i18n.locale;
  },
  props: {
    mode: {
      type: String,
      required: false,
      default: Modes.NORMAL,
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event));
    },
  },
};
</script>
