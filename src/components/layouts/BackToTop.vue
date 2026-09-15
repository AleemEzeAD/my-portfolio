<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);
const progress = ref(0);

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

let ticking = false;

function updateScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  progress.value = Math.min(100, Math.max(0, pct));
  visible.value = scrollTop > 350;
  ticking = false;
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(updateScroll);
    ticking = true;
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  updateScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <button
    class="back-to-top"
    :class="{ 'back-to-top--visible': visible }"
    aria-label="Back to top"
    @click="scrollToTop"
  >
    <svg class="back-to-top-ring" viewBox="0 0 44 44">
      <circle class="back-to-top-track" cx="22" cy="22" r="20"></circle>
      <circle
        class="back-to-top-bar"
        cx="22"
        cy="22"
        r="20"
        :style="{
          strokeDasharray: CIRCUMFERENCE,
          strokeDashoffset: CIRCUMFERENCE * (1 - progress / 100),
        }"
      ></circle>
    </svg>

    <span class="back-to-top-icon">
      <i class="fa-solid fa-arrow-up"></i>
    </span>
  </button>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: 26px;
  bottom: 26px;
  z-index: 50;
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: var(--color-darkblue);
  cursor: pointer;
  opacity: 0;
  transform: translateY(16px) scale(0.7);
  pointer-events: none;
  transition:
    opacity 0.35s ease,
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease;
}

.back-to-top--visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.back-to-top:hover {
  box-shadow: var(--shadow-blue);
}

.back-to-top:hover .back-to-top-icon {
  transform: translateY(-3px);
}

.back-to-top-ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.back-to-top-track {
  fill: none;
  stroke: color-mix(in srgb, var(--color-blue) 14%, transparent);
  stroke-width: 2.5;
}

.back-to-top-bar {
  fill: none;
  stroke: var(--color-blue);
  stroke-width: 2.5;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.15s ease-out;
}

.back-to-top-icon {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-size: 14px;
  transition: transform 0.3s ease;
}

@media (max-width: 575px) {
  .back-to-top {
    right: 18px;
    bottom: 18px;
    width: 42px;
    height: 42px;
  }

  .back-to-top-icon {
    font-size: 13px;
  }
}

@media (max-width: 320px) {
  .back-to-top {
    right: 14px;
    bottom: 14px;
    width: 38px;
    height: 38px;
  }

  .back-to-top-icon {
    font-size: 12px;
  }
}
</style>
