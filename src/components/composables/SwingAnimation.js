import { onBeforeUnmount, onMounted } from "vue";
import { gsap } from "gsap";

export function useSwingAnimation(selector) {
  let animation;

  onMounted(() => {
    const targets = document.querySelectorAll(selector);

    if (!targets.length) {
      return;
    }

    animation = gsap.fromTo(
      targets,
      {
        rotation: -8,
        transformOrigin: "50% 0%",
      },
      {
        rotation: 8,
        duration: 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      },
    );
  });

  onBeforeUnmount(() => {
    animation?.kill();
  });
}