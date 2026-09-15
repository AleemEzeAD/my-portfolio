<template>
  <Transition name="loader">
    <div
      v-if="visible"
      class="loader fixed inset-0 z-[99999] flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030712] text-white select-none"
    >
      <div class="loader__graphic relative flex items-center justify-center">
        <div class="loader__outer absolute inset-0 rounded-full border border-dashed border-cyan-500/30"></div>

        <div class="loader__orbit absolute inset-2 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <div class="absolute top-2 left-1/4 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>

          <div class="absolute right-1/4 bottom-4 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></div>
        </div>

        <div
          class="loader__middle absolute inset-8 rounded-full border-2 border-transparent border-t-cyan-400 border-b-emerald-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        ></div>

        <div
          class="loader__inner absolute inset-14 rounded-full border border-cyan-500/40"
        ></div>

        <div class="loader__ellipse absolute inset-0 flex items-center justify-center">
          <div
            class="h-16 w-full rotate-[-25deg] rounded-full border border-cyan-400/60 bg-gradient-to-r from-transparent via-cyan-500/10 to-emerald-500/10 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          ></div>
        </div>

        <div class="relative z-10 flex items-center justify-center">
          <span
            class="loader__logo bg-gradient-to-tr from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text font-black tracking-tighter text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          >
            A
          </span>
        </div>
      </div>

      <h1
        class="mt-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-xl font-bold tracking-[0.3em] text-transparent uppercase"
      >
        Aleem Abbas
      </h1>

      <p
        class="mt-1 text-xs font-medium tracking-[0.25em] text-cyan-300/70 uppercase"
      >
        Frontend Developer
      </p>

      <div
        class="mt-8 h-1.5 w-56 overflow-hidden rounded-full border border-cyan-500/20 bg-gray-800/80 p-[1px] shadow-inner"
      >
        <div
          class="h-full w-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 shadow-[0_0_10px_#34d399]"
        ></div>
      </div>

      <span
        class="mt-3 animate-pulse text-[11px] tracking-[0.2em] text-gray-400 uppercase"
      >
        Loading Portfolio...
      </span>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue"

const visible = ref(true)

let timeout

const hideLoader = () => {
  clearTimeout(timeout)
  visible.value = false
}

onMounted(() => {
  if (document.readyState === "complete") {
    timeout = setTimeout(hideLoader, 500)
    return
  }

  window.addEventListener("load", hideLoader)

  timeout = setTimeout(hideLoader, 4000)
})

onUnmounted(() => {
  window.removeEventListener("load", hideLoader)
  clearTimeout(timeout)
})
</script>

<style scoped>
@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes spinReverse {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}

@keyframes progressAnim {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.loader__outer {
  animation: spinSlow 15s linear infinite;
}

.loader__middle {
  animation: spinReverse 8s linear infinite;
}

.loader__ellipse {
  animation: spinSlow 7s linear infinite;
}

.loader > div:nth-child(5) > div {
  animation: progressAnim 1.6s ease-in-out infinite;
}

.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.6s ease, visibility 0.6s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
  visibility: hidden;
}

.loader__graphic {
  width: 288px;
  height: 288px;
}

.loader__logo {
  font-size: 72px;
}

@media (max-width: 767px) {
  .loader__graphic {
    width: 240px;
    height: 240px;
  }

  .loader__logo {
    font-size: 60px;
  }

  .loader__outer {
    inset: 0;
  }

  .loader__orbit {
    inset: 6px;
  }

  .loader__middle {
    inset: 26px;
  }

  .loader__inner {
    inset: 48px;
  }

  .loader__ellipse > div {
    height: 52px;
  }

  .loader h1 {
    margin-top: 20px;
    font-size: 17px;
    letter-spacing: 0.25em;
  }

  .loader p {
    font-size: 10px;
    letter-spacing: 0.2em;
  }

  .loader > div:nth-child(5) {
    width: 200px;
    margin-top: 24px;
  }
}

@media (max-width: 480px) {
  .loader__graphic {
    width: 200px;
    height: 200px;
  }

  .loader__logo {
    font-size: 52px;
  }

  .loader__middle {
    inset: 22px;
  }

  .loader__inner {
    inset: 40px;
  }

  .loader__orbit div {
    width: 9px;
    height: 9px;
  }

  .loader__ellipse > div {
    height: 44px;
  }

  .loader h1 {
    font-size: 15px;
    letter-spacing: 0.2em;
  }

  .loader p {
    font-size: 9px;
  }

  .loader > div:nth-child(5) {
    width: 180px;
  }

  .loader > span {
    font-size: 9px;
  }
}

@media (max-width: 320px) {
  .loader__graphic {
    width: 175px;
    height: 175px;
  }

  .loader__logo {
    font-size: 46px;
  }

  .loader__middle {
    inset: 19px;
  }

  .loader__inner {
    inset: 35px;
  }

  .loader__ellipse > div {
    height: 38px;
  }

  .loader h1 {
    font-size: 13px;
  }

  .loader p {
    font-size: 8px;
  }

  .loader > div:nth-child(5) {
    width: 160px;
  }
}
</style>