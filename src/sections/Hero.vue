<script setup>
import { onMounted, onUnmounted } from "vue";
import { useSwingAnimation } from "../components/composables/SwingAnimation.js";

useSwingAnimation(".hero figure img");

let rafId = null;
const cleanupFns = [];

onMounted(() => {
  const heroEl = document.querySelector(".hero");
  const slots = Array.from(document.querySelectorAll(".hero .hv__slot"));

  if (!heroEl || !slots.length) return;

  slots.forEach((slot, i) => {
    const chip = slot.firstElementChild;

    if (chip) {
      chip.style.animation = `chipFloat ${2.4 + i * 0.15}s ease-in-out infinite`;
      chip.style.animationDelay = `${i * 0.12}s`;
    }
  });

  function updateRotation() {
    const rect = heroEl.getBoundingClientRect();
    const heroHeight = rect.height || 1;
    const progress = Math.min(Math.max(-rect.top / heroHeight, 0), 1);
    const rad = progress * Math.PI * 2;

    slots.forEach((slot) => {
      const style = getComputedStyle(slot);

      const x = parseFloat(style.getPropertyValue("--x")) || 0;
      const y = parseFloat(style.getPropertyValue("--y")) || 0;

      const angle = Math.atan2(y, x);
      const radius = Math.sqrt(x * x + y * y);

      const nx = Math.cos(angle + rad) * radius;
      const ny = Math.sin(angle + rad) * radius;

      slot.style.setProperty("--ox", `${nx - x}px`);
      slot.style.setProperty("--oy", `${ny - y}px`);
    });

    rafId = null;
  }

  function onScroll() {
    if (rafId === null) {
      rafId = requestAnimationFrame(updateRotation);
    }
  }

  updateRotation();

  window.addEventListener("scroll", onScroll, { passive: true });

  cleanupFns.push(() => {
    window.removeEventListener("scroll", onScroll);
  });
});

onUnmounted(() => {
  cleanupFns.forEach((fn) => fn());

  if (rafId) {
    cancelAnimationFrame(rafId);
  }
});
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="content">
        <div class="grid grid-cols-2 items-center">
          <div>
            <div class="text">
              <div class="hero-orbit">
                <figure>
                  <img src="/images/programming.png" alt="programming icon" />
                </figure>

                <figure>
                  <img src="/images/script.png" alt="script icon" />
                </figure>
              </div>

              <h1>
                I turn
                <span class="text-blue">ideas</span>
                into
                <span class="text-green">interfaces</span>
                that connect.
              </h1>
              <a
                href="/resume/Aleem_Abbas.pdf"
                rel="noopener noreferrer"
                class="resume_btn"
              >
                <i class="fa-regular fa-file-lines"></i>
                View Resume
              </a>
            </div>
          </div>

          <div class="relative">
            <div class="hero__visual" id="heroVisual">
              <div class="hv__card hv__card--main">
                <div class="hv__card-dot"></div>
                <div class="hv__card-dot"></div>
                <div class="hv__card-dot"></div>

                <pre
                  class="code-preview"
                ><code><span class="code-keyword">const</span> <span class="code-variable">Aleem</span> <span class="code-punctuation">=</span> <span class="code-punctuation">&#123;</span>
  <span class="code-property">role</span><span class="code-punctuation">:</span> <span class="code-string">&quot;frontend developer&quot;</span><span class="code-punctuation">,</span>
  <span class="code-property">stack</span><span class="code-punctuation">:</span> <span class="code-punctuation">[</span><span class="code-string">&quot;Next.js&quot;</span><span class="code-punctuation">,</span> <span class="code-string">&quot;Vue.js&quot;</span><span class="code-punctuation">,</span><span class="code-punctuation">]</span><span class="code-punctuation">,</span>
  <span class="code-property">skills</span><span class="code-punctuation">:</span> <span class="code-punctuation">[</span><span class="code-string">&quot;Responsive Design&quot;</span><span class="code-punctuation">]</span><span class="code-punctuation">,</span>
  <span class="code-property">focus</span><span class="code-punctuation">:</span> <span class="code-string">&quot;clean &amp; scalable UI&quot;</span><span class="code-punctuation">,</span>
  <span class="code-property">detail</span><span class="code-punctuation">:</span> <span class="code-boolean">true</span><span class="code-punctuation">,</span>
  <span class="code-property">status</span><span class="code-punctuation">:</span> <span class="code-string">&quot;available&quot;</span><span class="code-punctuation">,</span>
<span class="code-punctuation">&#125;</span></code></pre>
              </div>

              <div class="hv__ring"></div>

              <div class="hv__slot hv__slot--bootstrap">
                <div class="chip--bootstrap">
                  <i class="fa-brands fa-bootstrap"></i>
                </div>
              </div>

              <div class="hv__slot hv__slot--css">
                <div class="chip--css">
                  <i class="fa-brands fa-css3-alt"></i>
                </div>
              </div>

              <div class="hv__slot hv__slot--js">
                <div class="chip--js">
                  <i class="fa-brands fa-js"></i>
                </div>
              </div>

              <div class="hv__slot hv__slot--tailwind">
                <div class="chip--tailwind">
                  <i class="fa-brands fa-tailwind-css"></i>
                </div>
              </div>

              <div class="hv__slot hv__slot--react">
                <div class="chip--react">
                  <i class="fa-brands fa-react"></i>
                </div>
              </div>

              <div class="hv__slot hv__slot--html">
                <div class="chip--html">
                  <i class="fa-brands fa-html5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

