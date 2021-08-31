<template>
  <div>
    <h2>{{ $t("greetings.hi") }}</h2>
    <AppButton
      :to="localePath({ name: 'selam' })"
      class="justify-center mt-2 mb-8"
    >
      {{ $t("links.download") }}
    </AppButton>
  </div>
</template>

<script>
export default {};
</script>
