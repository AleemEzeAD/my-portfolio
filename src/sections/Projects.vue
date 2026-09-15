<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "BitByte Technologies | Innovative IT Solutions",
    image: `${import.meta.env.BASE_URL}images/projects/bitbyte.webp`,
    link: "https://bitbytetechnologies.com/",
    gradient: 1,
    glow: "var(--color-blue)",
  },
  {
    title: "Caring Crest - Senior Care Services",
    image: `${import.meta.env.BASE_URL}images/projects/caring.webp`,
    link: "https://html-templates.evonicmedia.com/caringcrest/",
    gradient: 2,
    glow: "var(--color-green)",
  },
  {
    title: "Chirolift - Physiotherapy & Chiropractic Services",
    image: `${import.meta.env.BASE_URL}images/projects/chirolift.webp`,
    link: "https://html-templates.evonicmedia.com/chirolift/",
    gradient: 3,
    glow: "var(--color-sun)",
  },
  {
    title: "Free Auctions, Classifieds, and Advertisement Postings",
    image: `${import.meta.env.BASE_URL}images/projects/ezead.png`,
    link: "https://www.ezead.com/",
    gradient: 2,
    glow: "var(--color-green)",
  },
  {
    title: "Rent a Car in Dubai | Supercar & Luxury Car Rental Dubai",
    image: `${import.meta.env.BASE_URL}images/projects/zenith.png`,
    link: "https://zenithsupercarrental.ae/",
    gradient: 3,
    glow: "var(--color-sun)",
  },
  {
    title: "AI-Powered SaaS, Web & Mobile App Development Company",
    image: `${import.meta.env.BASE_URL}images/projects/redtech.png`,
    link: "https://redtechnologie.com/",
    gradient: 1,
    glow: "var(--color-blue)",
  },
  {
    title: "FlexiMart – Your Smart & Flexible Online Marketplace",
    image: `${import.meta.env.BASE_URL}images/projects/fleximart.webp`,
    link: "https://aleemezead.github.io/fleximart/",
    gradient: 1,
    glow: "var(--color-blue)",
  },
  {
    title: "Farm Fresh Hub – Eat Fresh, Live Fresh",
    image: `${import.meta.env.BASE_URL}images/projects/fresh.webp`,
    link: "https://aleemezead.github.io/fresh/",
    gradient: 2,
    glow: "var(--color-green)",
  },
  {
    title: "Online Auctions with Free Listings, Bid & Sell",
    image: `${import.meta.env.BASE_URL}images/projects/auction.jpg`,
    link: "https://www.ezead.auction/",
    gradient: 3,
    glow: "var(--color-sun)",
  },
  {
    title: "LINQBUZZ-Blog-Magazine Platform",
    image: `${import.meta.env.BASE_URL}images/projects/linqbuzz.webp`,
    link: "https://html-templates.evonicmedia.com/linqbuzz/",
    gradient: 2,
    glow: "var(--color-green)",
  },
  {
    title: "Stockrypt — Smart Stock Market & Digital Investment Platform",
    image: `${import.meta.env.BASE_URL}images/projects/stockrypt.png`,
    link: "https://html-templates.evonicmedia.com/stockrypt/",
    gradient: 3,
    glow: "var(--color-sun)",
  },
  {
    title: "InventionAIs - AI Startups & Technology Platform",
    image: `${import.meta.env.BASE_URL}images/projects/invention.png`,
    link: "https://html-templates.evonicmedia.com/inventionai/",
    gradient: 1,
    glow: "var(--color-blue)",
  },
];

const scrollTriggers = [];

onMounted(() => {
  const headAnim = gsap.from(
    ".projects .projects-badge, .projects .projects-title, .projects .projects-sub",
    {
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".projects .projects-head",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    },
  );
  scrollTriggers.push(headAnim.scrollTrigger);

  const cards = gsap.utils.toArray(".projects .project-card");
  cards.forEach((card, i) => {
    const anim = gsap.from(card, {
      y: 60,
      opacity: 0,
      scale: 0.92,
      rotate: -2,
      duration: 0.7,
      ease: "power3.out",
      delay: i * 0.12,
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });
    scrollTriggers.push(anim.scrollTrigger);

    const frame = card.querySelector(".project-frame");
    if (frame) {
      gsap.from(frame, {
        rotate: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        delay: i * 0.12 + 0.15,
        clearProps: "transform",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    }
  });
});

onUnmounted(() => {
  scrollTriggers.forEach((t) => t && t.kill());
});
</script>

<template>
  <section id="projects" class="projects text-white">
    <div class="container">
      <div class="projects-head text-center">
        <span class="projects-badge">
          <span class="projects-dot"></span>
          Selected Work
        </span>

        <h2 class="projects-title">Projects I've shipped.</h2>

        <p class="projects-sub">
          A few real-world builds — from first idea to finished interface.
        </p>
      </div>

      <div class="projects-grid">
        <a
          v-for="(project, i) in projects"
          :key="project.title"
          :href="project.link"
          class="project-card"
          :class="`project-card--g${project.gradient}`"
        >
          <span class="project-index">{{
            String(i + 1).padStart(2, "0")
          }}</span>

          <span class="project-arrow">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </span>

          <span
            class="project-glow"
            :style="{ background: project.glow }"
          ></span>

          <div class="project-frame">
            <div class="project-frame-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="project-frame-image">
              <img :src="project.image" :alt="project.title" />
            </div>
          </div>

          <h3 class="project-title">{{ project.title }}</h3>

          <span class="project-link">
            View Project
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
