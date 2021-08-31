<template>
  <div>
    <AppLangSelect
      :value="$i18n.locale"
      :options="$i18n.locales"
      label="Select language"
    >
    </AppLangSelect>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>