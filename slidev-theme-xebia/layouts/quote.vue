<template>
  <div class="slidev-layout quote text-center grid h-full px-32 pt-32">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout.quote {
  background-image: url("../img/backgrounds/quote.jpg");

  h1 {
    @apply text-5xl font-700;
  }
  h1 + p {
    @apply mt-2;
    @apply font-700 text-2xl;
  }
}
</style>