<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import SocialLoginButtons from '~/components/auth/SocialLoginButtons.vue'

const form = reactive({
  email: '',
  password: ''
})

const showPassword = ref(false)
const touched = reactive({
  email: false,
  password: false
})
const isSubmitted = ref(false)
const submitMessage = ref('')

const emailError = computed(() => {
  if (!touched.email && !isSubmitted.value) {
    return ''
  }

  if (!form.email.trim()) {
    return '請輸入電郵地址。'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(form.email) ? '' : '電郵格式不正確，請重新輸入。'
})

const passwordError = computed(() => {
  if (!touched.password && !isSubmitted.value) {
    return ''
  }

  if (!form.password.trim()) {
    return '請輸入密碼。'
  }

  if (form.password.length < 8) {
    return '密碼至少需要 8 個字元。'
  }

  return ''
})

const hasErrors = computed(() => Boolean(emailError.value || passwordError.value))

function onSubmit() {
  isSubmitted.value = true
  touched.email = true
  touched.password = true

  if (hasErrors.value) {
    submitMessage.value = '請先修正表單錯誤，再重新提交。'
    return
  }

  submitMessage.value = '示範模式：登入功能即將接入。'
}
</script>

<template>
  <section class="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-8">
    <div class="space-y-2">
      <p class="text-sm font-medium uppercase tracking-[0.24em] text-amber-200/75">
        Member Sign In
      </p>
      <h2 class="text-2xl font-semibold text-stone-50 sm:text-3xl">
        登入 HKAF 帳戶
      </h2>
      <p class="text-sm leading-7 text-stone-300">
        使用你的 Email 與密碼登入，繼續參與討論串、回覆與學術交流。
      </p>
    </div>

    <form class="mt-8 space-y-5" @submit.prevent="onSubmit">
      <div class="space-y-2">
        <label for="login-email" class="text-sm font-medium text-stone-200">電郵地址</label>
        <input
          id="login-email"
          v-model="form.email"
          type="email"
          autocomplete="email"
          placeholder="name@university.edu.hk"
          class="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-500 focus:border-amber-200/45 focus:outline-none"
          @blur="touched.email = true"
        >
        <p v-if="emailError" class="text-sm text-amber-200">
          {{ emailError }}
        </p>
      </div>

      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <label for="login-password" class="text-sm font-medium text-stone-200">密碼</label>
          <button
            type="button"
            class="text-xs font-medium text-stone-400 hover:text-amber-100"
            @click="showPassword = !showPassword"
          >
            {{ showPassword ? '隱藏密碼' : '顯示密碼' }}
          </button>
        </div>
        <input
          id="login-password"
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          autocomplete="current-password"
          placeholder="請輸入密碼"
          class="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-500 focus:border-amber-200/45 focus:outline-none"
          @blur="touched.password = true"
        >
        <p v-if="passwordError" class="text-sm text-amber-200">
          {{ passwordError }}
        </p>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-3 text-sm">
        <NuxtLink to="/" class="text-stone-400 hover:text-stone-100">
          返回首頁
        </NuxtLink>
        <NuxtLink to="/login?intent=reset" class="text-amber-100/85 hover:text-amber-100">
          忘記密碼？
        </NuxtLink>
      </div>

      <button
        type="submit"
        class="inline-flex w-full items-center justify-center rounded-xl border border-amber-200/35 bg-amber-100/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200/55 hover:bg-amber-100/20"
      >
        登入帳戶
      </button>

      <p v-if="submitMessage" class="text-sm text-stone-300">
        {{ submitMessage }}
      </p>
    </form>

    <div class="mt-8 border-t border-white/10 pt-6">
      <SocialLoginButtons />
    </div>

    <p class="mt-6 text-sm text-stone-300">
      尚未有帳戶？
      <NuxtLink to="/login?intent=register" class="font-semibold text-amber-100 hover:text-amber-50">
        前往註冊
      </NuxtLink>
    </p>
  </section>
</template>