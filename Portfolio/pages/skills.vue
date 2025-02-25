<template>
  <div class="relative">
    <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
      Technical Skills
    </h2>

    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Mobile Development -->
        <div class="group bg-dark-light p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 
                    animate-fade-in-up hover:scale-[1.02] hover:rotate-1">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:animate-bounce">
              <i class="fas fa-mobile-alt text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-semibold text-primary group-hover:translate-x-2 transition-transform duration-300">
              Mobile Development
            </h3>
          </div>
          <div class="space-y-4 transform-gpu">
            <p class="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
              Cross-platform development with Flutter and native integration.
            </p>
            <div class="flex flex-wrap gap-2">
              <span v-for="(tag, index) in ['Flutter', 'Dart', 'Mobile UI/UX']" 
                    :key="tag"
                    :style="`animation-delay: ${index * 100}ms`"
                    class="tech-tag animate-fade-in-right">
                {{ tag }}
              </span>
            </div>
            <ul class="mt-4 space-y-2">
              <li v-for="(item, index) in ['State Management', 'Native Integration', 'App Publishing']"
                  :key="item"
                  :style="`animation-delay: ${(index + 3) * 100}ms`"
                  class="skill-item animate-fade-in-left">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Programming Languages -->
        <div class="group bg-dark-light p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 
                    animate-fade-in-up hover:scale-[1.02] hover:-rotate-1" style="animation-delay: 100ms;">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <i class="fas fa-code text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-semibold text-primary">Programming Languages</h3>
          </div>
          <div class="space-y-4">
            <p class="text-text-secondary">Proficient in multiple programming languages.</p>
            <div class="flex flex-wrap gap-2">
              <span class="tech-tag">Dart</span>
              <span class="tech-tag">Python</span>
              <span class="tech-tag">JavaScript</span>
            </div>
            <ul class="mt-4 space-y-2">
              <li class="skill-item">TypeScript</li>
              <li class="skill-item">C#</li>
              <li class="skill-item">SQL</li>
            </ul>
          </div>
        </div>

        <!-- Frameworks -->
        <div class="group bg-dark-light p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in-left" style="animation-delay: 200ms;">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <i class="fas fa-layer-group text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-semibold text-primary">Frameworks</h3>
          </div>
          <div class="space-y-4">
            <p class="text-text-secondary">Experience with modern development frameworks.</p>
            <div class="flex flex-wrap gap-2">
              <span class="tech-tag">Flutter</span>
              <span class="tech-tag">.NET</span>
              <span class="tech-tag">Vue.js</span>
            </div>
            <ul class="mt-4 space-y-2">
              <li class="skill-item">Django</li>
              <li class="skill-item">Express.js</li>
              <li class="skill-item">Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <!-- Database Systems -->
        <div class="group bg-dark-light p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in-right" style="animation-delay: 200ms;">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <i class="fas fa-database text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-semibold text-primary">Database Systems</h3>
          </div>
          <div class="space-y-4">
            <p class="text-text-secondary">Experience with various database systems.</p>
            <div class="flex flex-wrap gap-2">
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">MongoDB</span>
              <span class="tech-tag">MySQL</span>
            </div>
            <ul class="mt-4 space-y-2">
              <li class="skill-item">Redis</li>
              <li class="skill-item">SQLite</li>
              <li class="skill-item">Firebase</li>
            </ul>
          </div>
        </div>

        <!-- Development Tools -->
        <div class="group bg-dark-light p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in-left" style="animation-delay: 400ms;">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <i class="fas fa-tools text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-semibold text-primary">Development Tools</h3>
          </div>
          <div class="space-y-4">
            <p class="text-text-secondary">Tools used for development and collaboration.</p>
            <div class="flex flex-wrap gap-2">
              <span class="tech-tag">VS Code</span>
              <span class="tech-tag">Git</span>
              <span class="tech-tag">Docker</span>
            </div>
            <ul class="mt-4 space-y-2">
              <li class="skill-item">Android Studio</li>
              <li class="skill-item">GitHub</li>
              <li class="skill-item">Postman</li>
            </ul>
          </div>
        </div>

        <!-- Mobile Features -->
        <div class="group bg-dark-light p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in-right" style="animation-delay: 400ms;">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <i class="fas fa-puzzle-piece text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-semibold text-primary">Mobile Features</h3>
          </div>
          <div class="space-y-4">
            <p class="text-text-secondary">Key features of mobile applications.</p>
            <div class="flex flex-wrap gap-2">
              <span class="tech-tag">Push Notifications</span>
              <span class="tech-tag">Local Storage</span>
            </div>
            <ul class="mt-4 space-y-2">
              <li class="skill-item">API Integration</li>
              <li class="skill-item">Performance Optimization</li>
              <li class="skill-item">App Publishing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-tag {
  @apply px-3 py-1 rounded-full text-sm bg-primary/10 text-primary transition-all duration-300;
}

.tech-tag:hover {
  @apply bg-primary text-dark scale-110 -rotate-3 shadow-lg shadow-primary/20;
}

.skill-item {
  @apply flex items-center text-text-secondary transition-all duration-300;
}

.skill-item:hover {
  @apply text-text-primary translate-x-2 scale-105;
}

.skill-item::before {
  content: "→";
  @apply mr-2 text-primary transition-transform duration-300;
}

.skill-item:hover::before {
  @apply translate-x-1 scale-125;
}

.group:hover {
  @apply shadow-lg shadow-primary/5;
}

/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Apply animations */
.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 2s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

/* Stagger animations for multiple items */
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.5s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-right {
  animation: fadeInRight 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Improve performance with GPU acceleration */
.transform-gpu {
  transform: translateZ(0);
}
</style>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    }
  ]
})
</script> 