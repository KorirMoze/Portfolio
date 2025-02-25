<template>
  <div class="portfolio">
    <header>
      <nav>
        <h1>KORIR MOSES</h1>
        <div class="nav-links">
          <a href="#about" @click.prevent="scrollTo('about')">About</a>
          <a href="#experience" @click.prevent="scrollTo('experience')">Experience</a>
          <a href="#projects" @click.prevent="scrollTo('projects')">Projects</a>
          <a href="#skills" @click.prevent="scrollTo('skills')">Skills</a>
          <a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
        </div>
      </nav>
    </header>

    <main>
      <section id="about">
        <AboutSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>

    <footer>
      <div class="footer-content">
        <div class="quick-links">
          <a href="https://github.com/KorirMoze" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/moses-k-528947ba" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/korirmoze" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <p class="copyright">© {{ new Date().getFullYear() }} Korir Moses. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Import components
import AboutSection from '~/pages/index.vue'
import ExperienceSection from '~/pages/experience.vue'
import ProjectsSection from '~/pages/projects.vue'
import SkillsSection from '~/pages/skills.vue'
import ContactSection from '~/pages/contact.vue'

// Font Awesome
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    }
  ]
})

// Smooth scroll function
const scrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Highlight active section on scroll
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
        })
      }
    })
  }, {
    threshold: 0.5
  })

  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section)
  })
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;
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
  max-width: 1200px;
  margin: 0 auto;
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
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;
}

.nav-links a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  transition: width 0.3s ease;
}

.nav-links a:hover:after,
.nav-links a.active:after {
  width: 100%;
}

/* Footer styles */
footer {
  background: #1e293b;
  padding: 2rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.quick-links {
  display: flex;
  gap: 2rem;
}

.quick-links a {
  color: #94a3b8;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.quick-links a:hover {
  color: #60a5fa;
  transform: translateY(-3px);
}

.copyright {
  color: #94a3b8;
  font-size: 0.9rem;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Responsive styles */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  header {
    padding: 1rem;
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

/* Section spacing */
section {
  padding: 6rem 0;
  scroll-margin-top: 80px; /* Accounts for fixed header */
}

section:first-of-type {
  padding-top: 2rem;
}

/* Active link state */
.nav-links a.active:after,
.nav-links a:hover:after {
  width: 100%;
}
</style>