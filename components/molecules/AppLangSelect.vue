<template>
  <div
    class="inline-block transition-colors duration-300 ease-linear  nui-select text-nuxt-gray dark:bg-dark-surface dark:text-dark-onSurfaceSecondary"
  >
    <div class="flex items-center content-center px-4">
      <div class="p-2">
        <slot name="icon" />
      </div>
      <select
        v-model="selectedValue"
        @change="onChange(selectedValue)"
        class="block w-full mt-1 bg-gray-100 border-transparent rounded-md appearance-none  focus:border-gray-500 focus:bg-white focus:ring-0"
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
