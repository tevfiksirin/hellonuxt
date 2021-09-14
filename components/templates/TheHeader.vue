<template>
  <div>
    <header class="w-full text-gray-600 body-font">
      <div
        class="container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row"
      >
        <nuxt-link
          :to="localePath('/')"
          class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
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

      <nav class="hidden lg:flex lg:pt-1 xl:pt-0">
        <ul class="flex text-center">
          <li
            v-for="link in $t('header.links')"
            :key="link.slug"
            class="py-2 xl:px-4 lg:py-0 lg:px-2"
          >
            <NuxtLink
              v-if="!link.href"
              class="block font-medium uppercase transition-colors duration-300 ease-linear hover:no-underline light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
              :to="
                localePath({
                  name: link.slug,
                  params: { book: 'get-started', slug: 'installation' }
                })
              "
            >
              {{ link.name }}
            </NuxtLink>
            <a
              v-else
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener"
              class="block font-medium uppercase transition-colors duration-300 ease-linear hover:no-underline hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
            >
              {{ link.name }}
              <span
                class="px-1 text-white lowercase align-top bg-orange-500 rounded-sm dark:text-black text-ss"
              >
                new
              </span>
            </a>
          </li>
        </ul>
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