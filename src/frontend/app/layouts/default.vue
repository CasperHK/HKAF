<script setup lang="ts">
import NavTopBar from '~/components/navigation/NavTopBar.vue'
</script>

<template>
  <div class="min-h-screen bg-stone-950 text-stone-100">
    <NavTopBar />
    <slot />
  </div>
</template>