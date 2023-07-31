<template>
  <div class="slidev-layout intro h-full grid">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout.intro {
  background-image: url("../img/backgrounds/intro.png");

  h1 {
    @apply text-5xl max-w-md font-600;
  }
}
</style>
