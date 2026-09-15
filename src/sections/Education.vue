<template>
  <section id="education" class="edu text-white">
    <div class="container">
      <div
        class="grid items-center gap-[45px] lg:grid-cols-[1fr_1fr] lg:gap-[60px]"
      >
        <div class="text-center lg:text-left">
          <span
            class="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[2.5px] text-blue sm:text-[12px]"
          >
            <span
              class="h-[6px] w-[6px] rounded-full bg-green shadow-green"
            ></span>
            Education
          </span>

          <h2
            class="mx-auto max-w-[480px] text-[32px] font-bold leading-[1.1] tracking-[-0.6px] sm:text-[40px] md:text-[50px] lg:mx-0"
          >
            Built on a strong academic foundation.
          </h2>

          <p
            class="mx-auto mt-4 max-w-[420px] text-[14px] leading-[1.6] text-text/65 sm:mt-5 sm:text-[15px] lg:mx-0"
          >
            A formal grounding in computing and information systems that shaped
            how I approach problem solving and software development.
          </p>

          <div class="edu-facts mt-6 grid grid-cols-3 gap-2 sm:gap-3">
            <div class="edu-fact">
              <i class="fa-solid fa-graduation-cap"></i>
              <span>Bachelor's Degree</span>
            </div>
            <div class="edu-fact">
              <i class="fa-solid fa-calendar-days"></i>
              <span>4-Year Program</span>
            </div>
            <div class="edu-fact">
              <i class="fa-solid fa-building-columns"></i>
              <span>Public Sector University</span>
            </div>
          </div>

          <div
            class="edu-tags mt-5 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            <span>Data Structures</span>
            <span>OOP</span>
            <span>DBMS</span>
            <span>Web Development</span>
            <span>Networking</span>
            <span>Software Engineering</span>
          </div>

          <div
            class="mt-5 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span class="h-px w-[40px] bg-blue/40"></span>
            <span
              class="text-[10px] uppercase tracking-[1.8px] text-text/40 sm:text-[11px]"
            >
              2020 — 2024
            </span>
          </div>
        </div>

        <div class="edu-card-wrap">
          <div class="edu-glow"></div>

          <div class="edu-card">
            <div class="edu-card-top">
              <div class="edu-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <span class="edu-status">Completed</span>
            </div>

            <h3 class="edu-degree">BS Information Technology</h3>
            <p class="edu-institute">The Islamia University of Bahawalpur</p>

            <div class="edu-meta">
              <div class="edu-meta-item">
                <span class="edu-meta-label">Session</span>
                <span class="edu-meta-value">2020 — 2024</span>
              </div>

              <div class="edu-meta-divider"></div>

              <div class="edu-meta-item">
                <span class="edu-meta-label">CGPA</span>
                <span class="edu-meta-value edu-meta-value-cgpa"
                  >3.49<span class="edu-meta-scale"> / 4.00</span></span
                >
              </div>
            </div>

            <div class="edu-progress">
              <div class="edu-progress-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
