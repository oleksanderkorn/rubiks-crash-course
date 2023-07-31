<!--
  Usage:

```md

---
layout: two-cols-header
---

This spans both

::left::
# Left
This shows on the left

::right::
# Right
This shows on the right

```
-->
<template>
  <div class="slidev-layout two-cols-header w-full h-full grid">
    <div class="col-header">
      <slot />
    </div>
    <div class="col-left">
      <slot name="left" />
    </div>
    <div class="col-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.two-cols-header {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  column-gap: 4em;
  background-image: url("../img/backgrounds/two-cols-header.png");
}

.col-header { grid-area: 1 / 1 / 2 / 3; }
.col-left { grid-area: 2 / 1 / 3 / 2; }
.col-right { grid-area: 2 / 2 / 3 / 3; }
</style>
