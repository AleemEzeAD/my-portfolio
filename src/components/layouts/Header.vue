<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const isMenuOpen = ref(false);
const isAvailabilityOpen = ref(false);
const resumeUrl = `${import.meta.env.BASE_URL}resume/Aleem_Abbas.pdf`;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};

const HEADER_OFFSET = 80;

function scrollToHash(hash) {
  if (!hash || hash === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const target = document.querySelector(hash);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({ top, behavior: "smooth" });
}

function scrollToSection(event, hash) {
  event.preventDefault();
  closeMenu();
  scrollToHash(hash);
}

function openAvailability() {
  closeMenu();
  isAvailabilityOpen.value = true;
}

function closeAvailability() {
  isAvailabilityOpen.value = false;
}

function goToContactFromModal() {
  closeAvailability();
  scrollToHash("#contact");
}

function onKeydown(e) {
  if (e.key === "Escape" && isAvailabilityOpen.value) {
    closeAvailability();
  }
}

watch(isAvailabilityOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <div class="header-root">
    <header
      class="sticky top-0 left-0 z-50 w-full border-b border-white/10 bg-body/80 backdrop-blur-xl"
    >
      <div class="container">
        <nav>
          <div class="flex h-20 items-center justify-between">
            <a
              href="#top"
              class="flex items-center gap-3 text-white no-underline"
              @click="scrollToSection($event, '#top')"
            >
              <span
                class="flex h-10 w-10 items-center justify-center rounded-lg border border-blue/40 bg-darkblue text-lg font-bold text-blue shadow-blue"
              >
                AA
              </span>

              <span
                class="text-xs sm:text-lg font-bold tracking-[2px] sm:block"
              >
                ALEEM<span class="text-blue">.</span>ABBAS
              </span>
            </a>

            <div class="hidden items-center md:gap-4 lg:gap-8 md:flex">
              <a
                href="#top"
                class="font-medium tracking-wide text-text no-underline transition duration-300 hover:text-green text-sm md:text-base"
                @click="scrollToSection($event, '#top')"
              >
                Home
              </a>
              <a
                href="#experience"
                class="font-medium tracking-wide text-text no-underline transition duration-300 hover:text-green text-sm md:text-base"
                @click="scrollToSection($event, '#experience')"
              >
                Work Experience
              </a>

              <a
                href="#education"
                class="font-medium tracking-wide text-text no-underline transition duration-300 hover:text-green text-sm md:text-base"
                @click="scrollToSection($event, '#education')"
              >
                Education
              </a>

              <a
                href="#stacks"
                class="font-medium tracking-wide text-text no-underline transition duration-300 hover:text-green text-sm md:text-base"
                @click="scrollToSection($event, '#stacks')"
              >
                Stacks
              </a>
              <a
                href="#projects"
                class="font-medium tracking-wide text-text no-underline transition duration-300 hover:text-green text-sm md:text-base"
                @click="scrollToSection($event, '#projects')"
              >
                Projects
              </a>

              <a
                href="#contact"
                class="font-medium tracking-wide text-text no-underline transition duration-300 hover:text-green text-sm md:text-base"
                @click="scrollToSection($event, '#contact')"
              >
                Contact
              </a>
            </div>

            <button
              type="button"
              class="availability-button hidden items-center gap-2 rounded-full border border-blue bg-darkblue/70 px-4 py-2 text-sm font-semibold text-blue no-underline transition duration-300 hover:border-sun hover:text-sun md:flex md:text-base"
              @click="openAvailability"
            >
              <span class="h-2 w-2 rounded-full bg-blue"></span>

              Available for work

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </button>

            <button
              type="button"
              aria-label="Toggle menu"
              :aria-expanded="isMenuOpen"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-darkblue text-text transition duration-300 hover:border-blue hover:text-green text-sm md:hidden"
              @click="toggleMenu"
            >
              <svg
                v-if="!isMenuOpen"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>

              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
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
          </div>

          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div
              v-if="isMenuOpen"
              class="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div class="flex flex-col gap-1 py-4">
                <a
                  href="#top"
                  class="rounded-lg px-4 py-3 font-medium tracking-wide text-text no-underline transition duration-300 hover:bg-darkblue hover:text-green text-sm"
                  @click="scrollToSection($event, '#top')"
                >
                  Home
                </a>

                <a
                  href="#experience"
                  class="rounded-lg px-4 py-3 font-medium tracking-wide text-text no-underline transition duration-300 hover:bg-darkblue hover:text-green text-sm"
                  @click="scrollToSection($event, '#experience')"
                >
                  Work Experience
                </a>

                <a
                  href="#education"
                  class="rounded-lg px-4 py-3 font-medium tracking-wide text-text no-underline transition duration-300 hover:bg-darkblue hover:text-green text-sm"
                  @click="scrollToSection($event, '#education')"
                >
                  Education
                </a>

                <a
                  href="#stacks"
                  class="rounded-lg px-4 py-3 font-medium tracking-wide text-text no-underline transition duration-300 hover:bg-darkblue hover:text-green text-sm"
                  @click="scrollToSection($event, '#stacks')"
                >
                  Stacks
                </a>
                <a
                  href="#projects"
                  class="rounded-lg px-4 py-3 font-medium tracking-wide text-text no-underline transition duration-300 hover:bg-darkblue hover:text-green text-sm"
                  @click="scrollToSection($event, '#projects')"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  class="rounded-lg px-4 py-3 font-medium tracking-wide text-text no-underline transition duration-300 hover:bg-darkblue hover:text-green text-sm"
                  @click="scrollToSection($event, '#contact')"
                >
                  Contact
                </a>

                <button
                  type="button"
                  class="availability-button mt-2 flex items-center justify-center gap-2 rounded-full border border-blue bg-darkblue/70 px-4 py-3 text-sm font-semibold text-blue no-underline transition duration-300 hover:border-sun hover:text-sun"
                  @click="openAvailability"
                >
                  <span class="h-2 w-2 rounded-full bg-blue"></span>

                  Available for work

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </Transition>
        </nav>
      </div>
    </header>

    <Teleport to="body">
      <Transition name="availability-fade">
        <div
          v-if="isAvailabilityOpen"
          class="availability-overlay"
          @click.self="closeAvailability"
        >
          <div
            class="availability-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="availability-title"
          >
            <button
              type="button"
              class="availability-modal-close"
              aria-label="Close"
              @click="closeAvailability"
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

            <span class="availability-modal-status">
              <span class="availability-modal-pulse"></span>
              Currently Available
            </span>

            <h3 id="availability-title" class="availability-modal-title">
              Open for new opportunities
            </h3>

            <p class="availability-modal-text">
              I'm actively taking on new frontend projects and would love to
              hear about what you're building.
            </p>

            <div class="availability-modal-grid">
              <div class="availability-modal-item">
                <span class="availability-modal-label">Engagement</span>
                <span class="availability-modal-value"
                  >Freelance & Full-time</span
                >
              </div>

              <div class="availability-modal-item">
                <span class="availability-modal-label">Start Date</span>
                <span class="availability-modal-value">Immediate</span>
              </div>

              <div class="availability-modal-item">
                <span class="availability-modal-label">Work Mode</span>
                <span class="availability-modal-value">Remote / Hybrid</span>
              </div>

              <div class="availability-modal-item">
                <span class="availability-modal-label">Response Time</span>
                <span class="availability-modal-value">Within 24 hours</span>
              </div>
            </div>

           <a
              :href="resumeUrl"
              download="Aleem_Abbas.pdf"
              rel="noopener noreferrer"
              class="availability-modal-cta"
            >
              Download Resume
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
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.header-root {
  display: contents;
}

.availability-button {
  animation: availability-blink 2s ease-in-out infinite;
}

.availability-button:hover {
  animation: none;
  border-color: var(--color-green);
  box-shadow: 0 0 18px rgba(255, 207, 74, 0.45);
  color: var(--color-green);
  opacity: 1;
  cursor: pointer;
}

.availability-button:hover span {
  background-color: var(--color-green);
}

@keyframes availability-blink {
  0%,
  100% {
    border-color: rgba(0, 229, 255, 0.35);
    box-shadow: 0 0 0 rgba(0, 229, 255, 0);
    opacity: 0.7;
  }

  50% {
    border-color: rgba(0, 229, 255, 1);
    box-shadow: 0 0 18px rgba(0, 229, 255, 0.45);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .availability-button {
    animation: none;
  }
}

.availability-overlay {
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

.availability-modal {
  position: relative;
  width: 100%;
  max-width: 420px;
  padding: 32px;
  border: 1px solid color-mix(in srgb, var(--color-blue) 22%, transparent);
  border-radius: 20px;
  background: var(--background-image-gradient-1);
  box-shadow: var(--shadow-white);
}

.availability-modal-close {
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

.availability-modal-close:hover {
  color: var(--color-blue);
  border-color: color-mix(in srgb, var(--color-blue) 40%, transparent);
  transform: rotate(90deg);
}

.availability-modal-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-green);
}

.availability-modal-pulse {
  position: relative;
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-green);
}

.availability-modal-pulse::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--color-green);
  animation: availability-pulse-ring 1.8s ease-out infinite;
}

@keyframes availability-pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(2.6);
    opacity: 0;
  }
}

.availability-modal-title {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-white);
}

.availability-modal-text {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: color-mix(in srgb, var(--color-text) 65%, transparent);
}

.availability-modal-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 22px;
}

.availability-modal-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 14px;
  border: 1px solid color-mix(in srgb, var(--color-blue) 14%, transparent);
  border-radius: 12px;
  background: color-mix(in srgb, var(--color-darkblue) 55%, transparent);
}

.availability-modal-label {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-text) 40%, transparent);
}

.availability-modal-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-white);
}

.availability-modal-cta {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  padding: 13px 20px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--color-blue), var(--color-green));
  font-size: 14px;
  font-weight: 700;
  color: var(--color-body);
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.availability-modal-cta:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-blue);
}

.availability-fade-enter-active .availability-modal,
.availability-fade-leave-active .availability-modal {
  transition:
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.3s ease;
}

.availability-fade-enter-active,
.availability-fade-leave-active {
  transition: opacity 0.3s ease;
}

.availability-fade-enter-from,
.availability-fade-leave-to {
  opacity: 0;
}

.availability-fade-enter-from .availability-modal,
.availability-fade-leave-to .availability-modal {
  opacity: 0;
  transform: translateY(24px) scale(0.92);
}

@media screen and (max-width: 480px) {
  .availability-modal {
    padding: 12px;
    border-radius: 16px;
    text-align: center;
  }
  .availability-modal-item {
    align-items: center;
    text-align: center;
  }
  .availability-modal-title {
    font-size: 19px;
  }

  .availability-modal-text {
    font-size: 13px;
  }

  .availability-modal-grid {
    gap: 10px;
    margin-top: 18px;
  }

  .availability-modal-cta {
    margin-top: 20px;
    padding: 12px 18px;
    font-size: 13px;
  }
}

@media screen and (max-width: 320px) {
  .availability-modal {
    padding: 18px;
  }

  .availability-modal-title {
    font-size: 17px;
  }

  .availability-modal-value {
    font-size: 12px;
  }

  .availability-modal-item {
    padding: 10px 12px;
  }
}
</style>
