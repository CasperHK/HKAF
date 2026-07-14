<script setup lang="ts">
import { categories } from '~/utils/categories'
</script>

<template>
  <main class="min-h-screen">
    <section class="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-12">
      <div class="max-w-3xl space-y-8">
        <p class="inline-flex rounded-full border border-amber-200/20 bg-amber-100/10 px-4 py-2 text-sm tracking-[0.28em] text-amber-100/80 uppercase">
          Hong Kong Academic Forum
        </p>
        <div class="space-y-5">
          <h1 class="max-w-4xl text-5xl font-semibold leading-tight text-stone-50 sm:text-6xl lg:text-7xl">
            讓香港學術討論重新回到嚴謹、公開與可持續的交流現場。
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
            以繁體中文為主的學術型社群平台，連接學生、研究者與專業實務者，圍繞科學、工程與本地議題展開高質素討論。
          </p>
        </div>
        <div class="flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            class="inline-flex items-center justify-center rounded-md bg-amber-200 px-6 py-3 text-base font-semibold text-stone-950 shadow-[0_12px_30px_rgba(245,214,136,0.2)] hover:bg-amber-100"
          >
            申請加入社群
          </a>
          <a
            href="#fields"
            class="inline-flex items-center justify-center rounded-md border border-stone-200/15 bg-white/5 px-6 py-3 text-base font-semibold text-stone-100 hover:border-amber-200/30 hover:bg-white/10"
          >
            瀏覽討論領域
          </a>
        </div>
      </div>
    </section>

    <section id="fields" class="border-t border-white/10 bg-black/10 py-24 sm:py-28">
      <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div class="max-w-3xl space-y-4">
          <p class="text-sm font-medium uppercase tracking-[0.26em] text-amber-200/75">
            Discussion Fields
          </p>
          <h2 class="text-3xl font-semibold leading-tight text-stone-50 sm:text-4xl lg:text-5xl">
            從基礎科學到本地議題，建立可長期積累的討論領域。
          </h2>
          <p class="text-lg leading-8 text-stone-300">
            首頁先展示核心學術分區，讓新訪客快速理解社群範圍，也為後續的完整分類頁保留清晰的擴展方向。
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="category in categories"
            :key="category.title"
            :to="`/categories/${category.slug}`"
            class="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:bg-white/[0.05]"
          >
            <div class="flex h-full flex-col justify-between gap-6">
              <div class="space-y-3">
                <div class="h-px w-14 bg-gradient-to-r from-amber-200/90 to-transparent"></div>
                <h3 class="text-2xl font-semibold text-stone-50">
                  {{ category.title }}
                </h3>
                <p class="text-base leading-7 text-stone-300">
                  {{ category.description }}
                </p>
              </div>

              <div class="inline-flex items-center gap-2 text-sm font-semibold text-amber-100/85">
                進一步探索
                <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>