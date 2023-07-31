<template>
  <div class="slidev-layout cover h-full grid pr-136">
    <img src="../img/xebia-logo.svg" class="absolute w-32 top-10 left-14" />
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout.cover {
  background-image: url("../img/backgrounds/cover.jpg");

  h1 {
    @apply text-5xl max-w-md font-600;
  }
}
</style>
