<script setup lang="ts">
import { computed } from 'vue'
import LoginFormCard from '~/components/auth/LoginFormCard.vue'

const route = useRoute()

const intentMessage = computed(() => {
  const intent = String(route.query.intent ?? '')

  if (intent === 'register') {
    return '註冊功能正在規劃中，你可以先登入現有帳戶。'
  }

  if (intent === 'reset') {
    return '重設密碼流程即將推出，請稍後再試。'
  }

  return ''
})

useSeoMeta({
  title: '登入 | 香港學術論壇',
  description: '登入 HKAF 帳戶，參與學術討論與社群交流。',
  ogTitle: '登入 | 香港學術論壇',
  ogDescription: '登入 HKAF 帳戶，參與學術討論與社群交流。'
})
</script>

<template>
  <main class="min-h-screen">
    <section class="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
        <section class="rounded-3xl border border-white/10 bg-black/10 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-9">
          <p class="text-sm font-medium uppercase tracking-[0.24em] text-amber-200/75">
            Hong Kong Academic Forum
          </p>
          <h1 class="mt-4 text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
            歡迎回到 HKAF。
          </h1>
          <p class="mt-5 max-w-xl text-lg leading-8 text-stone-300">
            在這裡，研究者、學生與專業實務者以嚴謹方式交流觀點，持續累積可引用、可驗證的學術討論。
          </p>

          <div class="mt-8 space-y-3">
            <p class="text-sm font-medium uppercase tracking-[0.2em] text-stone-400">
              登入後你可以
            </p>
            <ul class="space-y-3 text-sm leading-7 text-stone-300">
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-amber-200"></span>
                <span>追蹤你關注的學術領域與討論串</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-amber-200"></span>
                <span>發表回覆、整理觀點與引用資料</span>
              </li>
              <li class="flex gap-3">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-amber-200"></span>
                <span>建立你的個人學術參與紀錄</span>
              </li>
            </ul>
          </div>

          <p v-if="intentMessage" class="mt-8 rounded-2xl border border-amber-200/20 bg-amber-100/10 px-4 py-3 text-sm text-amber-100">
            {{ intentMessage }}
          </p>
        </section>

        <LoginFormCard />
      </div>
    </section>
  </main>
</template>