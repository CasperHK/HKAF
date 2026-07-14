<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-stone-950/85 backdrop-blur-md">
    <div class="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-12">
      <div class="flex flex-wrap items-center gap-5">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-100/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/85 hover:border-amber-200/35 hover:bg-amber-100/15"
        >
          HKAF
        </NuxtLink>

        <nav class="flex flex-wrap items-center gap-2 text-sm">
          <NuxtLink
            to="/"
            class="rounded-md px-3 py-2 font-medium text-stone-200 transition hover:bg-white/5 hover:text-amber-100"
          >
            首頁
          </NuxtLink>
          <NuxtLink
            to="/#fields"
            class="rounded-md px-3 py-2 font-medium text-stone-200 transition hover:bg-white/5 hover:text-amber-100"
          >
            討論領域
          </NuxtLink>
        </nav>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <label class="relative block">
          <span class="sr-only">搜尋討論串</span>
          <input
            type="search"
            placeholder="搜尋討論串（即將推出）"
            class="w-56 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-stone-100 placeholder:text-stone-500 focus:border-amber-200/40 focus:outline-none sm:w-64"
          >
        </label>

        <NuxtLink
          to="/login"
          class="rounded-md border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-stone-100 transition hover:border-amber-200/30 hover:bg-white/10"
        >
          登入
        </NuxtLink>
        <NuxtLink
          to="/login?intent=register"
          class="rounded-md border border-amber-200/25 bg-amber-100/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200/40 hover:bg-amber-100/20"
        >
          註冊
        </NuxtLink>
      </div>
    </div>
  </header>
</template>