<template>
  <div class="h-screen min-w-full -mt-20 bg-yellow-400">
    <div class="container flex justify-center pt-32">
      <div class="">
        <h2 class="text-center">{{ $t("greetings.hi") }}</h2>
        <AppButton
          :to="localePath({ name: 'selam' })"
          class="justify-center mt-2 mb-8"
        >
          {{ $t("links.download") }}
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>