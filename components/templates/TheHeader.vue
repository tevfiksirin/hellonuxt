<template>
  <div>
    <header class="text-gray-600 body-font">
      <div
        class="container flex flex-col flex-wrap items-center p-5 mx-auto  md:flex-row"
      >
        <nuxt-link
          :to="localePath('/')"
          class="flex items-center mb-4 font-medium text-gray-900  title-font md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-xl">Tailblocks</span>
        </nuxt-link>
        <nav
          class="flex flex-wrap items-center justify-center text-base  md:ml-auto"
        >
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>

        <button class="">
          <AppLangSelect
            :value="$i18n.locale"
            :options="$i18n.locales"
            label="Select language"
          >
            <template #icon>
              <GlobeIcon />
            </template>
          </AppLangSelect>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
import GlobeIcon from "~/assets/icons/globe.svg?inline";
export default {
  components: {
    GlobeIcon,
  },
};
</script>

<style>
</style>