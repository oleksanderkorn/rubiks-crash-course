<template>
  <div class="slidev-layout section w-full h-full grid">
    <div class="my-auto text-center text-white">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout.section {
  background-image: url("../img/backgrounds/section.png");

  h1 {
    color: var(--slidev-theme-white);
    @apply text-6xl font-500 leading-20;
  }
}
</style>
