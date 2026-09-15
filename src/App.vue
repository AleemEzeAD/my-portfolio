<script setup>
import { onMounted, onUnmounted } from 'vue'
import Home from './views/Home.vue'

let glow
const moveCursor = (event) => {
    glow.style.left = `${event.clientX}px`
    glow.style.top = `${event.clientY}px`
}
onMounted(() => {
    glow = document.createElement('div')
    glow.id = 'cursor-glow'
    document.body.appendChild(glow)

    window.addEventListener('mousemove', moveCursor)
})
onUnmounted(() => {
    window.removeEventListener('mousemove', moveCursor)
    glow?.remove()
})
</script>

<template>
    <Home />
</template>

<!-- git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy -->