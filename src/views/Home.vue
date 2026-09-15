<script setup>
import Header from '../components/layouts/Header.vue'
import Hero from '../sections/Hero.vue' 
import Work from '../sections/Work.vue' 
import Education from '../sections/Education.vue' 
import Stacks from '../sections/Stacks.vue' 
import Projects from '../sections/Projects.vue' 
import Contact from '../sections/Contact.vue' 
import Footer from '../components/layouts/Footer.vue'
import BackToTop from '../components/layouts/BackToTop.vue'
</script>


<template>
    <div id="top">
        <Header />
        <main>
        <Hero />
        <Work />
        <Education />
        <Stacks />
        <Projects />
        <Contact />
        <Footer />
        <BackToTop />
        </main>
    </div>
</template>