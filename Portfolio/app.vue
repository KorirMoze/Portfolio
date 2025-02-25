<template>
  <div class="portfolio">
    <header>
      <nav>
        <h1>KORIR MOSES</h1>
        <div class="nav-links">
          <NuxtLink to="/">About</NuxtLink>
          <NuxtLink to="/experience">Experience</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/skills">Skills</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </nav>
    </header>

    <NuxtPage />
  </div>
</template>

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

<style>
/* Base styles */
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  background: #0f172a;
  color: #e2e8f0;
}

/* Layout */
.portfolio {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

/* Header styles */
header {
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav h1 {
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #e2e8f0;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  transition: width 0.3s ease;
}

.nav-links a:hover:after,
.nav-links a.router-link-active:after {
  width: 100%;
}

/* Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .portfolio {
    padding: 0 1rem;
  }
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0f172a;
}

::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #374151;
}

/* Selection */
::selection {
  background: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
}
</style>