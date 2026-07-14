<script setup lang="ts">
import { getPostsByCategorySlug } from '~/utils/category-posts'
import { getCategoryBySlug, categories } from '~/utils/categories'

const route = useRoute()
const slug = computed(() => String(route.params.slug ?? ''))
const category = computed(() => {
  const matchedCategory = getCategoryBySlug(slug.value)

  if (!matchedCategory) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Category Not Found'
    })
  }

  return matchedCategory
})

const posts = computed(() => getPostsByCategorySlug(category.value.slug))
const totalReplies = computed(() => posts.value.reduce((sum, post) => sum + post.replyCount, 0))
const totalViews = computed(() => posts.value.reduce((sum, post) => sum + post.viewCount, 0))
const otherCategories = computed(() => categories.filter((item) => item.slug !== category.value.slug).slice(0, 3))

useSeoMeta({
  title: `${category.value.title} | 香港學術論壇`,
  description: category.value.description,
  ogTitle: `${category.value.title} | 香港學術論壇`,
  ogDescription: category.value.overview
})
</script>

<template>
  <main class="min-h-screen">
    <section class="border-b border-white/10">
      <div class="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <NuxtLink
          to="/#fields"
          class="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-amber-200/80 hover:text-amber-100"
        >
          <span aria-hidden="true">←</span>
          返回討論領域
        </NuxtLink>

        <div class="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.8fr)] lg:items-end">
          <div class="space-y-7">
            <div class="space-y-4">
              <p class="text-sm font-medium uppercase tracking-[0.28em] text-amber-200/75">
                {{ category.englishTitle }}
              </p>
              <h1 class="max-w-4xl text-5xl font-semibold leading-tight text-stone-50 sm:text-6xl">
                {{ category.title }}
              </h1>
              <p class="max-w-3xl text-xl leading-9 text-stone-300">
                {{ category.overview }}
              </p>
            </div>

            <p class="max-w-3xl border-l border-amber-200/30 pl-6 text-lg leading-8 text-stone-200/90">
              {{ category.lead }}
            </p>

            <div class="flex flex-col gap-4 sm:flex-row">
              <a
                href="#latest-posts"
                class="inline-flex items-center justify-center rounded-md bg-amber-200 px-6 py-3 text-base font-semibold text-stone-950 shadow-[0_12px_30px_rgba(245,214,136,0.2)] hover:bg-amber-100"
              >
                查看最新貼文
              </a>
              <a
                href="#related-fields"
                class="inline-flex items-center justify-center rounded-md border border-stone-200/15 bg-white/5 px-6 py-3 text-base font-semibold text-stone-100 hover:border-amber-200/30 hover:bg-white/10"
              >
                探索相關領域
              </a>
            </div>
          </div>

          <aside class="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <p class="text-sm font-medium uppercase tracking-[0.24em] text-amber-200/75">
              Field Snapshot
            </p>
            <div class="mt-6 space-y-5">
              <div>
                <p class="text-xs uppercase tracking-[0.2em] text-stone-400">討論定位</p>
                <p class="mt-2 text-base leading-7 text-stone-200">
                  {{ category.description }}
                </p>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.2em] text-stone-400">適合內容</p>
                <ul class="mt-3 space-y-3 text-sm leading-7 text-stone-300">
                  <li v-for="item in category.highlights" :key="item" class="flex gap-3">
                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-amber-200"></span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.2em] text-stone-400">目前貼文概況</p>
                <div class="mt-3 grid grid-cols-2 gap-3">
                  <div class="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
                    <p class="text-xs uppercase tracking-[0.18em] text-stone-500">主題數</p>
                    <p class="mt-2 text-2xl font-semibold text-stone-50">
                      {{ posts.length }}
                    </p>
                  </div>
                  <div class="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
                    <p class="text-xs uppercase tracking-[0.18em] text-stone-500">總回覆</p>
                    <p class="mt-2 text-2xl font-semibold text-stone-50">
                      {{ totalReplies }}
                    </p>
                  </div>
                  <div class="rounded-2xl border border-white/10 bg-black/10 px-4 py-4 col-span-2">
                    <p class="text-xs uppercase tracking-[0.18em] text-stone-500">總瀏覽</p>
                    <p class="mt-2 text-2xl font-semibold text-stone-50">
                      {{ totalViews }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section id="latest-posts" class="py-24 sm:py-28">
      <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl space-y-4">
            <p class="text-sm font-medium uppercase tracking-[0.26em] text-amber-200/75">
              Latest Posts
            </p>
            <h2 class="text-3xl font-semibold leading-tight text-stone-50 sm:text-4xl lg:text-5xl">
              這個領域內正在發生的用戶討論。
            </h2>
            <p class="text-lg leading-8 text-stone-300">
              先以展示用貼文呈現論壇感，之後可直接接上真實分類資料與用戶發文流程。
            </p>
          </div>

          <a
            href="#future-discussions"
            class="inline-flex items-center gap-2 text-sm font-semibold text-stone-200 hover:text-amber-100"
          >
            看討論方向
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div class="mt-12 grid gap-6">
          <article
            v-for="post in posts"
            :key="post.id"
            class="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:border-amber-200/25 hover:bg-white/[0.05] sm:p-8"
          >
            <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div class="max-w-4xl space-y-5">
                <div class="flex flex-wrap items-center gap-3 text-sm text-stone-400">
                  <span class="rounded-full border border-amber-200/20 bg-amber-100/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/80">
                    {{ category.title }}
                  </span>
                  <span>{{ post.relativeTime }}</span>
                </div>

                <div class="space-y-3">
                  <h3 class="text-2xl font-semibold leading-tight text-stone-50 sm:text-3xl">
                    {{ post.title }}
                  </h3>
                  <p class="text-base leading-8 text-stone-300">
                    {{ post.excerpt }}
                  </p>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-stone-300"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <div class="w-full max-w-sm rounded-2xl border border-white/10 bg-black/10 p-5 lg:w-80">
                <div class="space-y-4">
                  <div>
                    <p class="text-lg font-semibold text-stone-50">
                      {{ post.authorName }}
                    </p>
                    <p class="mt-1 text-sm text-amber-100/80">
                      {{ post.authorRole }}
                    </p>
                    <p class="mt-1 text-sm leading-6 text-stone-400">
                      {{ post.authorAffiliation }}
                    </p>
                  </div>

                  <div class="grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-sm">
                    <div>
                      <p class="text-stone-500">回覆</p>
                      <p class="mt-1 text-xl font-semibold text-stone-50">{{ post.replyCount }}</p>
                    </div>
                    <div>
                      <p class="text-stone-500">瀏覽</p>
                      <p class="mt-1 text-xl font-semibold text-stone-50">{{ post.viewCount }}</p>
                    </div>
                  </div>

                  <NuxtLink
                    :to="`/categories/${category.slug}/posts/${post.id}`"
                    class="inline-flex w-full items-center justify-center rounded-md border border-amber-200/25 bg-amber-100/10 px-4 py-3 text-sm font-semibold text-amber-100 hover:border-amber-200/40 hover:bg-amber-100/15"
                  >
                    進入討論串
                  </NuxtLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="future-discussions" class="py-24 sm:py-28 border-t border-white/10 bg-black/10">
      <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div class="max-w-3xl space-y-4">
          <p class="text-sm font-medium uppercase tracking-[0.26em] text-amber-200/75">
            Discussion Directions
          </p>
          <h2 class="text-3xl font-semibold leading-tight text-stone-50 sm:text-4xl lg:text-5xl">
            這個領域可以如何展開高質素討論。
          </h2>
          <p class="text-lg leading-8 text-stone-300">
            除了即時貼文，這些主題也能成為長期累積知識、問題整理與跨院校交流的核心方向。
          </p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          <article
            v-for="theme in category.themes"
            :key="theme"
            class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)]"
          >
            <div class="space-y-4">
              <div class="h-px w-14 bg-gradient-to-r from-amber-200/90 to-transparent"></div>
              <h3 class="text-2xl font-semibold text-stone-50">
                {{ theme }}
              </h3>
              <p class="text-base leading-7 text-stone-300">
                之後可承接論文解析、案例比較、資料觀察與社群問答，形成清晰的討論脈絡。
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="related-fields" class="border-t border-white/10 bg-black/10 py-24 sm:py-28">
      <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div class="max-w-2xl space-y-4">
            <p class="text-sm font-medium uppercase tracking-[0.26em] text-amber-200/75">
              Related Fields
            </p>
            <h2 class="text-3xl font-semibold leading-tight text-stone-50 sm:text-4xl">
              也可延伸探索其他相鄰學術方向。
            </h2>
          </div>
          <NuxtLink
            to="/#fields"
            class="inline-flex items-center gap-2 text-sm font-semibold text-stone-200 hover:text-amber-100"
          >
            返回全部領域
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          <NuxtLink
            v-for="item in otherCategories"
            :key="item.slug"
            :to="`/categories/${item.slug}`"
            class="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:bg-white/[0.05]"
          >
            <div class="space-y-4">
              <p class="text-sm uppercase tracking-[0.2em] text-amber-200/75">
                {{ item.englishTitle }}
              </p>
              <h3 class="text-2xl font-semibold text-stone-50">
                {{ item.title }}
              </h3>
              <p class="text-base leading-7 text-stone-300">
                {{ item.description }}
              </p>
              <div class="inline-flex items-center gap-2 text-sm font-semibold text-amber-100/85">
                瀏覽此領域
                <span aria-hidden="true" class="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>