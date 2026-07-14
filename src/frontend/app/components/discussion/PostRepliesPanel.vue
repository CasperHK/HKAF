<script setup lang="ts">
import type { CategoryPostReply } from '~/utils/category-posts'

const props = withDefaults(
  defineProps<{
    replies: CategoryPostReply[]
    modelValue: string
    isSubmitting?: boolean
  }>(),
  {
    isSubmitting: false
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  submit: []
}>()

const replyCountLabel = computed(() => {
  const count = props.replies.length
  return `已載入 ${count} 則精選回覆`
})
</script>

<template>
  <section class="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="text-sm font-medium uppercase tracking-[0.24em] text-amber-200/75">
          Replies
        </p>
        <h2 class="mt-2 text-2xl font-semibold text-stone-50">
          學術回覆串
        </h2>
      </div>
      <p class="text-sm text-stone-400">
        {{ replyCountLabel }}
      </p>
    </div>

    <div class="mt-8 space-y-4">
      <article
        v-for="reply in replies"
        :key="reply.id"
        class="rounded-2xl border border-white/10 bg-black/10 p-5"
      >
        <div class="flex flex-wrap items-center justify-between gap-2 text-sm">
          <div>
            <p class="font-semibold text-stone-100">{{ reply.authorName }}</p>
            <p class="text-stone-400">{{ reply.authorRole }}</p>
          </div>
          <p class="text-stone-500">{{ reply.relativeTime }}</p>
        </div>
        <p class="mt-4 text-sm leading-7 text-stone-300">
          {{ reply.body }}
        </p>
        <div class="mt-4 flex items-center gap-2 text-xs text-stone-400">
          <span class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
            👍 {{ reply.likeCount }}
          </span>
        </div>
      </article>

      <article
        v-if="!replies.length"
        class="rounded-2xl border border-dashed border-white/15 bg-black/10 p-6 text-sm text-stone-400"
      >
        目前還沒有公開回覆，歡迎你成為第一位留言者。
      </article>
    </div>

    <div class="mt-10 border-t border-white/10 pt-8">
      <p class="text-sm font-medium uppercase tracking-[0.24em] text-amber-200/75">
        發表回覆
      </p>
      <textarea
        :value="modelValue"
        rows="5"
        placeholder="分享你的觀點、方法或補充文獻。"
        class="mt-4 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-7 text-stone-100 placeholder:text-stone-500 focus:border-amber-200/45 focus:outline-none"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      />

      <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p class="text-xs text-stone-500">
          原型模式：送出後會即時顯示在本頁，重新整理後不會保存。
        </p>
        <button
          type="button"
          :disabled="isSubmitting"
          class="inline-flex items-center justify-center rounded-full border border-amber-200/45 bg-amber-200/10 px-5 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-100 hover:bg-amber-100/20 disabled:cursor-not-allowed disabled:opacity-60"
          @click="emit('submit')"
        >
          {{ isSubmitting ? '送出中...' : '發表回覆' }}
        </button>
      </div>
    </div>
  </section>
</template>