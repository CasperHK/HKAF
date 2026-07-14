<script setup lang="ts">
import PostRepliesPanel from '~/components/discussion/PostRepliesPanel.vue'
import type { CategoryPostReply } from '~/utils/category-posts'
import { getPostByCategoryAndId, getRepliesByPostId } from '~/utils/category-posts'
import { getCategoryBySlug } from '~/utils/categories'

const route = useRoute()
const slug = computed(() => String(route.params.slug ?? ''))
const postId = computed(() => String(route.params.postId ?? ''))

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

const post = computed(() => {
  const matchedPost = getPostByCategoryAndId(category.value.slug, postId.value)

  if (!matchedPost) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post Not Found'
    })
  }

  return matchedPost
})

const draftReply = ref('')
const isSubmittingReply = ref(false)
const localReplies = ref<CategoryPostReply[]>([])

watch(
  () => post.value.id,
  (id) => {
    localReplies.value = [...getRepliesByPostId(id)]
    draftReply.value = ''
  },
  { immediate: true }
)

function submitReply() {
  const body = draftReply.value.trim()

  if (!body) {
    return
  }

  isSubmittingReply.value = true

  // Prototype behavior: append local reply instantly until backend persistence is wired.
  localReplies.value = [
    {
      id: `local-${Date.now()}`,
      authorName: '你',
      authorRole: 'HKAF 會員',
      relativeTime: '剛剛',
      body,
      likeCount: 0
    },
    ...localReplies.value
  ]

  draftReply.value = ''
  isSubmittingReply.value = false
}

useSeoMeta({
  title: `${post.value.title} | ${category.value.title} | 香港學術論壇`,
  description: post.value.excerpt,
  ogTitle: `${post.value.title} | ${category.value.title} | 香港學術論壇`,
  ogDescription: post.value.excerpt
})
</script>

<template>
  <main class="min-h-screen">
    <section class="border-b border-white/10">
      <div class="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div class="flex flex-wrap items-center gap-4 text-sm text-stone-400">
          <NuxtLink
            :to="`/categories/${category.slug}`"
            class="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.22em] text-amber-200/80 hover:text-amber-100"
          >
            <span aria-hidden="true">←</span>
            返回 {{ category.title }}
          </NuxtLink>
          <span class="text-stone-600">/</span>
          <NuxtLink to="/#fields" class="hover:text-stone-200">
            全部領域
          </NuxtLink>
        </div>

        <div class="mt-10 space-y-8">
          <div class="space-y-4">
            <p class="text-sm font-medium uppercase tracking-[0.28em] text-amber-200/75">
              {{ category.englishTitle }}
            </p>
            <h1 class="max-w-4xl text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl lg:text-6xl">
              {{ post.title }}
            </h1>
            <p class="max-w-3xl text-lg leading-8 text-stone-300">
              {{ post.excerpt }}
            </p>
          </div>

          <div class="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_320px]">
            <article class="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm">
              <div class="flex flex-wrap items-center gap-3 text-sm text-stone-400">
                <span class="rounded-full border border-amber-200/20 bg-amber-100/10 px-3 py-1 font-semibold text-amber-100/80">
                  {{ category.title }}
                </span>
                <span>{{ post.relativeTime }}</span>
              </div>

              <div class="mt-8 space-y-6 text-base leading-8 text-stone-300">
                <p>
                  {{ post.excerpt }}
                </p>
                <p>
                  這是一個討論串詳情頁原型，目的是先把 HKAF 的分類頁導向完整串流頁面，而不是停留在純展示卡片。之後這裡會承接完整主文、引用內容、留言回覆與排序控制。
                </p>
                <p>
                  目前先保留學術論壇應有的閱讀節奏與資訊層次：清楚標題、作者背景、分類脈絡，以及足夠長度的內容區塊，方便後續接上真實用戶貼文資料。
                </p>
              </div>

              <div class="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-stone-300"
                >
                  {{ tag }}
                </span>
              </div>

              <PostRepliesPanel
                v-model="draftReply"
                :replies="localReplies"
                :is-submitting="isSubmittingReply"
                @submit="submitReply"
              />
            </article>

            <aside class="rounded-3xl border border-white/10 bg-black/10 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
              <div class="space-y-6">
                <div>
                  <p class="text-sm font-medium uppercase tracking-[0.24em] text-amber-200/75">
                    Author
                  </p>
                  <div class="mt-4 space-y-2">
                    <p class="text-xl font-semibold text-stone-50">
                      {{ post.authorName }}
                    </p>
                    <p class="text-sm text-amber-100/80">
                      {{ post.authorRole }}
                    </p>
                    <p class="text-sm leading-6 text-stone-400">
                      {{ post.authorAffiliation }}
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-3 border-t border-white/10 pt-6 text-sm">
                  <div class="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                    <p class="text-stone-500">回覆</p>
                    <p class="mt-1 text-2xl font-semibold text-stone-50">{{ post.replyCount }}</p>
                  </div>
                  <div class="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                    <p class="text-stone-500">瀏覽</p>
                    <p class="mt-1 text-2xl font-semibold text-stone-50">{{ post.viewCount }}</p>
                  </div>
                </div>

                <div class="border-t border-white/10 pt-6">
                  <p class="text-sm font-medium uppercase tracking-[0.24em] text-amber-200/75">
                    Next Step
                  </p>
                  <p class="mt-3 text-sm leading-7 text-stone-300">
                    下一步可在這裡加入留言串、引用回覆、排序切換與發文者更多背景資料。
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>