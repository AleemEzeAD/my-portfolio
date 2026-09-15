<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "aleemabbas0002@gmail.com",
    href: "mailto:aleemabbas0002@gmail.com",
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: "Bahawalpur, Pakistan",
    href: null,
  },
  {
    icon: "fa-solid fa-circle-check",
    label: "Availability",
    value: "Open to freelance & full-time roles",
    href: null,
  },
];

const formName = ref("");
const formEmail = ref("");
const formMessage = ref("");

const isSuccessOpen = ref(false);
const submittedName = ref("");

const AUTO_CLOSE_MS = 6000;
let autoCloseTimer = null;
let autoCloseStart = 0;
let autoCloseRemaining = AUTO_CLOSE_MS;
const progress = ref(100);
let progressRaf = null;

function tickProgress() {
  const elapsed = Date.now() - autoCloseStart;
  const pct = Math.max(0, 100 - (elapsed / AUTO_CLOSE_MS) * 100);
  progress.value = pct;
  if (pct > 0 && isSuccessOpen.value) {
    progressRaf = requestAnimationFrame(tickProgress);
  }
}

function startAutoClose() {
  clearAutoClose();
  autoCloseStart = Date.now();
  autoCloseRemaining = AUTO_CLOSE_MS;
  progress.value = 100;
  progressRaf = requestAnimationFrame(tickProgress);
  autoCloseTimer = setTimeout(closeSuccess, AUTO_CLOSE_MS);
}

function pauseAutoClose() {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer);
    autoCloseTimer = null;
    autoCloseRemaining -= Date.now() - autoCloseStart;
  }
  if (progressRaf) {
    cancelAnimationFrame(progressRaf);
    progressRaf = null;
  }
}

function resumeAutoClose() {
  if (!isSuccessOpen.value) return;
  autoCloseStart = Date.now();
  progressRaf = requestAnimationFrame(tickProgress);
  autoCloseTimer = setTimeout(closeSuccess, Math.max(300, autoCloseRemaining));
}

function clearAutoClose() {
  if (autoCloseTimer) clearTimeout(autoCloseTimer);
  if (progressRaf) cancelAnimationFrame(progressRaf);
  autoCloseTimer = null;
  progressRaf = null;
}

function handleSubmit() {
  submittedName.value = formName.value.trim();
  isSuccessOpen.value = true;

  formName.value = "";
  formEmail.value = "";
  formMessage.value = "";

  startAutoClose();
}

function closeSuccess() {
  isSuccessOpen.value = false;
  clearAutoClose();
}

function onKeydown(e) {
  if (e.key === "Escape" && isSuccessOpen.value) closeSuccess();
}

watch(isSuccessOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

const scrollTriggers = [];

onMounted(() => {
  window.addEventListener("keydown", onKeydown);

  const leftAnim = gsap.from(
    ".contact .contact-badge, .contact .contact-title, .contact .contact-sub, .contact .contact-info-item",
    {
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-left",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    },
  );
  scrollTriggers.push(leftAnim.scrollTrigger);

  const formAnim = gsap.from(".contact .contact-card", {
    y: 40,
    opacity: 0,
    scale: 0.96,
    duration: 0.7,
    ease: "power3.out",
    clearProps: "transform",
    scrollTrigger: {
      trigger: ".contact .contact-card",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
  scrollTriggers.push(formAnim.scrollTrigger);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  clearAutoClose();
  document.body.style.overflow = "";
  scrollTriggers.forEach((t) => t && t.kill());
});
</script>

<template>
  <section id="contact" class="contact text-white">
    <div class="contact-glow"></div>

    <div class="container">
      <div
        class="grid items-center gap-[50px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-[70px]"
      >
        <div class="contact-left text-center lg:text-left">
          <span
            class="contact-badge mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[2.5px] text-blue sm:text-[12px]"
          >
            <span
              class="h-[6px] w-[6px] rounded-full bg-green shadow-green"
            ></span>
            Get In Touch
          </span>

          <h2
            class="contact-title mx-auto max-w-[460px] text-[32px] font-bold leading-[1.1] tracking-[-0.6px] sm:text-[40px] md:text-[48px] lg:mx-0"
          >
            Let's build something great together.
          </h2>

          <p
            class="contact-sub mx-auto mt-4 max-w-[420px] text-[14px] leading-[1.6] text-text/65 sm:mt-5 sm:text-[15px] lg:mx-0"
          >
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>

          <div class="contact-info">
            <a
              v-for="item in contactInfo"
              :key="item.label"
              :href="item.href ?? undefined"
              class="contact-info-item"
              :class="{ 'contact-info-item--static': !item.href }"
            >
              <span class="contact-info-icon">
                <i :class="item.icon"></i>
              </span>
              <span class="contact-info-text">
                <span class="contact-info-label">{{ item.label }}</span>
                <span class="contact-info-value">{{ item.value }}</span>
              </span>
            </a>
          </div>
        </div>

        <div class="contact-card">
          <div class="contact-card-bar">
            <span></span>
            <span></span>
            <span></span>
            <span class="contact-card-bar-label">new_message.js</span>
          </div>

          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="contact-field">
              <label for="c-name">Name</label>
              <input
                id="c-name"
                v-model="formName"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div class="contact-field">
              <label for="c-email">Email</label>
              <input
                id="c-email"
                v-model="formEmail"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div class="contact-field">
              <label for="c-message">Message</label>
              <textarea
                id="c-message"
                v-model="formMessage"
                rows="5"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" class="contact-submit">
              Send Message
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>

    <Transition name="success-fade">
      <div
        v-if="isSuccessOpen"
        class="success-overlay"
        @click.self="closeSuccess"
        @mouseenter="pauseAutoClose"
        @mouseleave="resumeAutoClose"
      >
        <div
          class="success-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <button
            type="button"
            class="success-close"
            aria-label="Close"
            @click="closeSuccess"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 6l12 12"></path>
              <path d="M18 6 6 18"></path>
            </svg>
          </button>

          <div class="success-icon-wrap">
            <span class="success-icon-ring"></span>
            <span class="success-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 12l5 5L20 6"></path>
              </svg>
            </span>
          </div>

          <h3 id="success-title" class="success-title">Message Sent!</h3>

          <p class="success-text">
            <template v-if="submittedName"
              >Thanks, {{ submittedName }}! </template
            >I've got your message and will get back to you within 24 hours.
          </p>

          <button type="button" class="success-cta" @click="closeSuccess">
            Done
          </button>

          <div class="success-progress-track">
            <div
              class="success-progress-bar"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.contact .success-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(3, 8, 16, 0.72);
  backdrop-filter: blur(6px);
}

.contact .success-modal {
  position: relative;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  padding: 34px 30px 28px;
  border: 1px solid color-mix(in srgb, var(--color-green) 22%, transparent);
  border-radius: 20px;
  background: var(--background-image-gradient-2);
  box-shadow: var(--shadow-white);
  text-align: center;
}

.contact .success-close {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border: 1px solid color-mix(in srgb, var(--color-white) 14%, transparent);
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-body) 50%, transparent);
  color: var(--color-text);
  cursor: pointer;
  transition:
    color 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}

.contact .success-close:hover {
  color: var(--color-green);
  border-color: color-mix(in srgb, var(--color-green) 40%, transparent);
  transform: rotate(90deg);
}

.contact .success-icon-wrap {
  position: relative;
  display: flex;
  width: 64px;
  height: 64px;
  margin-inline: auto;
  align-items: center;
  justify-content: center;
}

.contact .success-icon-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-green) 16%, transparent);
  animation: success-ring-pulse 1.8s ease-out infinite;
}

@keyframes success-ring-pulse {
  0% {
    transform: scale(0.85);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

.contact .success-icon {
  position: relative;
  z-index: 1;
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-green);
  color: var(--color-body);
  animation: success-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes success-pop {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

.contact .success-title {
  margin-top: 20px;
  font-size: 22px;
  font-weight: 700;
  color: var(--color-white);
}

.contact .success-text {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: color-mix(in srgb, var(--color-text) 65%, transparent);
}

.contact .success-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  padding: 11px 28px;
  border: 1px solid color-mix(in srgb, var(--color-green) 35%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-green) 10%, transparent);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-white);
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.contact .success-cta:hover {
  background: var(--color-green);
  color: var(--color-body);
  transform: translateY(-2px);
}

.contact .success-progress-track {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: color-mix(in srgb, var(--color-white) 8%, transparent);
}

.contact .success-progress-bar {
  height: 100%;
  background: var(--color-green);
}

.contact .success-fade-enter-active,
.contact .success-fade-leave-active {
  transition: opacity 0.3s ease;
}

.contact .success-fade-enter-from,
.contact .success-fade-leave-to {
  opacity: 0;
}

.contact .success-fade-enter-active .success-modal,
.contact .success-fade-leave-active .success-modal {
  transition:
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.3s ease;
}

.contact .success-fade-enter-from .success-modal,
.contact .success-fade-leave-to .success-modal {
  opacity: 0;
  transform: translateY(24px) scale(0.92);
}
@media screen and (max-width: 480px) {
  .contact .success-modal {
    padding: 20px 20px 20px;
  }
  .contact .success-title {
    margin-top: 10px;
    font-size: 16px;
  }
}
</style>
