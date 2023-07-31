<template>
  <div class="slidev-layout end h-full grid">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout.end {
  background-image: url("../img/backgrounds/end.jpg");
  color: var(--slidev-theme-white);

  h1 {
    color: var(--slidev-theme-white);
    @apply text-5xl max-w-md font-600;
  }
}
</style>
