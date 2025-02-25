<template>
  <div class="relative">
    <!-- Avatar floating in the corner -->
    <div class="absolute -top-12 right-4 md:right-12 w-24 h-24 animate-bounce-slow">
      <div class="w-full h-full rounded-full border-4 border-primary shadow-lg shadow-primary/20 bg-dark-light flex items-center justify-center text-primary">
        <i class="fas fa-user text-3xl"></i>
      </div>
    </div>

    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
        About Me
      </h2>

      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Profile Image/Placeholder -->
        <div class="relative group animate-fade-in-left">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div class="relative bg-dark-light rounded-lg shadow-xl aspect-[4/5] flex items-center justify-center">
            <i class="fas fa-user-circle text-8xl text-primary/50"></i>
          </div>
        </div>

        <!-- About Text -->
        <div class="space-y-6">
          <p class="text-xl text-text-primary leading-relaxed animate-fade-in-right">
            Full Stack Software Engineer passionate about developing enterprise-level solutions with expertise in banking systems, GIS applications, and web development.
          </p>
          
          <p class="text-text-secondary leading-relaxed animate-fade-in-right" style="animation-delay: 200ms;">
            With over 2 years of experience in the software industry, I specialize in building robust, scalable applications that solve complex business challenges. My expertise spans across banking solutions, geospatial applications, and full-stack development.
          </p>
          
          <p class="text-text-secondary leading-relaxed animate-fade-in-right" style="animation-delay: 400ms;">
            My approach combines technical excellence with business acumen, focusing on delivering solutions that not only meet technical requirements but also drive business value.
          </p>

          <!-- Passion Points -->
          <div class="mt-8 space-y-4">
            <h3 class="text-lg font-semibold text-primary animate-fade-in-right" style="animation-delay: 600ms;">
              I'm particularly passionate about:
            </h3>
            <ul class="space-y-3">
              <li v-for="(point, index) in passionPoints" 
                  :key="point"
                  :style="`animation-delay: ${(index + 4) * 200}ms`"
                  class="flex items-center space-x-3 animate-fade-in-left group">
                <span class="text-primary group-hover:translate-x-1 transition-transform duration-300">→</span>
                <span class="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {{ point }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const passionPoints = [
  'Architecting scalable systems that handle high-volume transactions',
  'Implementing secure, efficient financial technology solutions',
  'Building intuitive user interfaces that enhance user experience',
  'Optimizing application performance and system reliability'
]
</script>

<style scoped>
/* Optional: Add any custom styles here */
</style> 