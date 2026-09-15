<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stackGroups = [
  {
    title: "Core",
    icon: "fa-solid fa-code",
    stacks: [
      { name: "HTML5", icon: "fa-brands fa-html5", color: "#e44d26", level: 5 },
      {
        name: "CSS3",
        icon: "fa-brands fa-css3-alt",
        color: "#2965f1",
        level: 5,
      },
      {
        name: "JavaScript",
        icon: "fa-brands fa-js",
        color: "#f0db4f",
        level: 4,
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "fa-solid fa-layer-group",
    stacks: [
      {
        name: "Vue.js",
        icon: "fa-brands fa-vuejs",
        color: "#42b883",
        level: 4,
      },
      { name: "React", icon: "fa-brands fa-react", color: "#61dafb", level: 3 },
      {
        name: "Next.js",
        icon: "fa-solid fa-n",
        color: "var(--color-blue)",
        level: 3,
      },
      {
        name: "Laravel Blade",
        icon: "fa-brands fa-laravel",
        color: "#ff2d20",
        level: 4,
      },
    ],
  },
  {
    title: "Styling",
    icon: "fa-solid fa-palette",
    stacks: [
      {
        name: "Tailwind CSS",
        icon: "fa-solid fa-wind",
        color: "var(--color-blue)",
        level: 4,
      },
      {
        name: "Bootstrap",
        icon: "fa-brands fa-bootstrap",
        color: "#7952b3",
        level: 4,
      },
      {
        name: "GSAP",
        icon: "fa-solid fa-bolt",
        color: "var(--color-green)",
        level: 3,
      },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "fa-solid fa-toolbox",
    stacks: [
      {
        name: "Git",
        icon: "fa-brands fa-git-alt",
        color: "var(--color-green)",
        level: 4,
      },
      {
        name: "Figma to Code",
        icon: "fa-brands fa-figma",
        color: "#a259ff",
        level: 4,
      },
      {
        name: "Responsive Design",
        icon: "fa-solid fa-mobile-screen-button",
        color: "var(--color-blue)",
        level: 5,
      },
      {
        name: "Font Awesome",
        icon: "fa-brands fa-font-awesome",
        color: "var(--color-sun)",
        level: 5,
      },
    ],
  },
];

const stackIcons = stackGroups.flatMap((g) => g.stacks);

let marqueeTween = null;
const scrollTriggers = [];

onMounted(() => {
  const track = document.querySelector(".stacks .marquee-track");
  if (track) {
    marqueeTween = gsap.to(track, {
      xPercent: -50,
      duration: 26,
      repeat: -1,
      ease: "none",
    });
  }

  const groups = gsap.utils.toArray(".stacks .stack-group");
  groups.forEach((group, i) => {
    const anim = gsap.from(group, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: i * 0.08,
      scrollTrigger: {
        trigger: group,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });
    scrollTriggers.push(anim.scrollTrigger);
  });

  const cards = gsap.utils.toArray(".stacks .stack-card");
  cards.forEach((card, i) => {
    const anim = gsap.from(card, {
      y: 24,
      opacity: 0,
      scale: 0.94,
      duration: 0.5,
      ease: "power2.out",
      delay: (i % 4) * 0.07,
      scrollTrigger: {
        trigger: card,
        start: "top 92%",
        toggleActions: "play none none none",
      },
    });
    scrollTriggers.push(anim.scrollTrigger);
  });
});

onUnmounted(() => {
  if (marqueeTween) marqueeTween.kill();
  scrollTriggers.forEach((t) => t && t.kill());
});
</script>

<template>
  <section id="stacks" class="stacks text-white">
    <div class="stacks-marquee">
      <div class="marquee-track">
        <div class="marquee-group">
          <span
            v-for="(item, i) in stackIcons"
            :key="'a-' + i"
            class="marquee-item"
          >
            <i :class="item.icon" :style="{ color: item.color }"></i>
            {{ item.name }}
          </span>
        </div>
        <div class="marquee-group" aria-hidden="true">
          <span
            v-for="(item, i) in stackIcons"
            :key="'b-' + i"
            class="marquee-item"
          >
            <i :class="item.icon" :style="{ color: item.color }"></i>
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="stacks-head text-center">
        <span class="stacks-badge">
          <span class="stacks-dot"></span>
          List of modern stacks
        </span>

        <h2 class="stacks-title">The tools behind the interface.</h2>

        <p class="stacks-sub">
          A frontend-focused toolkit I use to turn designs into fast,
          responsive, production-ready interfaces.
        </p>
      </div>

      <div class="stacks-grid">
        <div
          class="stack-group"
          v-for="group in stackGroups"
          :key="group.title"
        >
          <div class="stack-group-head">
            <div class="stack-group-icon">
              <i :class="group.icon"></i>
            </div>
            <h3>{{ group.title }}</h3>
          </div>

          <div class="stack-cards">
            <div
              class="stack-card"
              v-for="stack in group.stacks"
              :key="stack.name"
            >
              <div class="stack-card-icon" :style="{ color: stack.color }">
                <i :class="stack.icon"></i>
              </div>
              <span class="stack-card-name">{{ stack.name }}</span>
              <div class="stack-level">
                <span
                  v-for="n in 5"
                  :key="n"
                  class="stack-dot"
                  :class="{ 'stack-dot-filled': n <= stack.level }"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

