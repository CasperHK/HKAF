<script setup lang="ts">
const providers = [
  { key: 'google', label: 'Google' },
  { key: 'github', label: 'GitHub' },
  { key: 'apple', label: 'Apple' }
]
</script>

<template>
  <div class="space-y-3">
    <p class="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
      或使用社交登入（即將推出）
    </p>
    <div class="grid gap-3 sm:grid-cols-3">
      <button
        v-for="provider in providers"
        :key="provider.key"
        type="button"
        class="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-stone-100 transition hover:border-amber-200/30 hover:bg-white/10"
      >
        {{ provider.label }}
      </button>
    </div>
  </div>
</template>